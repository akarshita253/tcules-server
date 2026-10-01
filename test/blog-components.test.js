'use strict';

const assert = require('node:assert/strict');
const { mkdtemp, rm, rmdir } = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { setTimeout: delay } = require('node:timers/promises');

process.env.NODE_ENV = 'test';
process.env.STRAPI_TELEMETRY_DISABLED = 'true';
process.env.JWT_SECRET = 'blog-component-test-users-permissions-secret';

const { createStrapi } = require('@strapi/strapi');
const BLOG_UID = 'api::blog.blog';
const populate = {
  exploreResources: { populate: ['events', 'blogs', 'podcasts'] },
};
const exceedsLimit = (error) => {
  assert.equal(error.name, 'ValidationError');
  assert.match(error.message, /maximum of 3 resources in total/);
  assert.deepEqual(error.details.errors[0].path, ['exploreResources']);
  return true;
};

test('Blog components enforce the combined resource limit in Strapi', async (t) => {
  const testDir = await mkdtemp(path.join(os.tmpdir(), 'tcules-blog-components-'));
  const databaseFile = path.join(testDir, 'test.db');
  const app = createStrapi({ appDir: path.resolve(__dirname, '..') });

  // Configure a disposable database before registration can instantiate it.
  app.config.set('database', {
    connection: {
      client: 'sqlite',
      connection: { filename: databaseFile },
      useNullAsDefault: true,
    },
  });
  app.config.set('server.app.keys', ['blog-component-test-key']);
  app.config.set('admin.auth.secret', 'blog-component-test-auth-secret');
  app.config.set('admin.apiToken.salt', 'blog-component-test-api-salt');
  app.config.set('admin.transfer.token.salt', 'blog-component-test-transfer-salt');
  app.config.set('admin.secrets.encryptionKey', 'blog-component-test-encryption-key');
  app.config.set('admin.serveAdminPanel', false);

  t.after(async () => {
    // Strapi dispatches entry events after commit without awaiting their
    // population queries. Let those queries finish before closing the pool.
    const pool = app.db.connection.client.pool;
    while (pool.numUsed() > 0 || pool.numPendingAcquires() > 0) {
      await delay(10);
    }
    await app.destroy();
    for (const suffix of ['', '-wal', '-shm']) {
      await rm(`${databaseFile}${suffix}`, { force: true });
    }
    await rmdir(testDir);
  });

  await app.load();
  const blogs = app.documents(BLOG_UID);
  const events = app.documents('api::event.event');
  const podcasts = app.documents('api::podcast.podcast');
  const resources = {
    events: await Promise.all([1, 2, 3, 4].map((number) => events.create({
      data: { title: `Event ${number}`, slug: `event-${number}` },
      status: 'published',
    }))),
    blogs: [await blogs.create({ data: { title: 'Related blog', slug: 'related-blog' } })],
    podcasts: [await podcasts.create({ data: { title: 'Related podcast', slug: 'related-podcast' } })],
  };
  const selection = (field, count) => resources[field].slice(0, count).map(({ documentId }) => documentId);
  const read = (documentId) => blogs.findOne({ documentId, populate });

  await t.test('existing blogs can still omit Explore Resources', async () => {
    const blog = await blogs.create({ data: { title: 'Plain blog', slug: 'plain-blog' } });
    const saved = await read(blog.documentId);
    assert.equal(saved.exploreResources, null);
  });

  await t.test('saves one of each resource', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Mixed resources',
        slug: 'mixed-resources',
        exploreResources: {
          heading: 'Explore resources',
          events: selection('events', 1),
          blogs: selection('blogs', 1),
          podcasts: selection('podcasts', 1),
        },
      },
    });
    const saved = await read(blog.documentId);
    for (const field of ['events', 'blogs', 'podcasts']) {
      assert.equal(new Set(saved.exploreResources[field].map(({ documentId }) => documentId)).size, 1);
    }
  });

  await t.test('allows three of the same type, counting draft/published rows once', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Three events', slug: 'three-events',
        exploreResources: { events: { set: selection('events', 3) } },
      },
      fields: ['title'],
    });
    const saved = await read(blog.documentId);
    assert.equal(new Set(saved.exploreResources.events.map(({ documentId }) => documentId)).size, 3);
  });

  await t.test('rejects four resources across fields and rolls back creation', async () => {
    const beforeCount = await blogs.count();
    const beforeComponents = await app.db.query('blog-and-casestudies.explore-resources').count();
    await assert.rejects(blogs.create({
      data: {
        title: 'Too many resources', slug: 'too-many-resources',
        exploreResources: {
          events: selection('events', 2),
          blogs: selection('blogs', 1),
          podcasts: selection('podcasts', 1),
        },
      },
    }), exceedsLimit);
    assert.equal(await blogs.count(), beforeCount);
    assert.equal(await app.db.query('blog-and-casestudies.explore-resources').count(), beforeComponents);
  });

  await t.test('partial connect updates reject a fourth resource and preserve prior content', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Update limit', slug: 'update-limit',
        exploreResources: { heading: 'Original heading', events: selection('events', 3) },
      },
    });
    const saved = await read(blog.documentId);
    await assert.rejects(blogs.update({
      documentId: blog.documentId,
      data: {
        title: 'Must roll back',
        exploreResources: {
          id: saved.exploreResources.id,
          heading: 'Must roll back',
          podcasts: { connect: selection('podcasts', 1) },
        },
      },
    }), exceedsLimit);
    const unchanged = await read(blog.documentId);
    assert.equal(unchanged.title, 'Update limit');
    assert.equal(unchanged.exploreResources.heading, 'Original heading');
    assert.equal(unchanged.exploreResources.podcasts.length, 0);

    await blogs.update({
      documentId: blog.documentId,
      data: {
        exploreResources: {
          id: unchanged.exploreResources.id,
          events: { disconnect: selection('events', 1) },
          podcasts: { connect: selection('podcasts', 1) },
        },
      },
    });
    const replaced = await read(blog.documentId);
    assert.equal(new Set(replaced.exploreResources.events.map(({ documentId }) => documentId)).size, 2);
    assert.equal(replaced.exploreResources.podcasts.length, 1);

    await blogs.update({ documentId: blog.documentId, data: { title: 'Unrelated edit' } });
    assert.equal((await read(blog.documentId)).title, 'Unrelated edit');
    await blogs.update({ documentId: blog.documentId, data: { exploreResources: null } });
    assert.equal((await read(blog.documentId)).exploreResources, null);
  });

  await t.test('publishing and cloning preserve valid selections', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Publish resources', slug: 'publish-resources',
        exploreResources: { events: selection('events', 3) },
      },
    });
    const published = await blogs.publish({ documentId: blog.documentId });
    assert.equal(published.entries.length, 1);
    const clone = await blogs.clone({ documentId: blog.documentId, data: { slug: 'cloned-resources' } });
    assert.equal(clone.entries.length, 1);
    const discarded = await blogs.discardDraft({ documentId: blog.documentId });
    assert.equal(discarded.entries.length, 1);
  });

  await t.test('immediate publication also rejects a fourth resource without leaving a draft', async () => {
    const beforeCount = await app.db.query(BLOG_UID).count();
    await assert.rejects(blogs.create({
      data: {
        title: 'Invalid published blog', slug: 'invalid-published-blog',
        exploreResources: { events: { connect: selection('events', 4) } },
      },
      status: 'published',
    }), exceedsLimit);
    assert.equal(await app.db.query(BLOG_UID).count(), beforeCount);
  });

  await t.test('replacement updates cannot exceed the limit', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Replacement limit', slug: 'replacement-limit',
        exploreResources: { events: selection('events', 1) },
      },
    });
    const saved = await read(blog.documentId);
    await assert.rejects(blogs.update({
      documentId: blog.documentId,
      data: { exploreResources: { id: saved.exploreResources.id, events: { set: selection('events', 4) } } },
    }), exceedsLimit);
    assert.equal(new Set((await read(blog.documentId)).exploreResources.events.map(({ documentId }) => documentId)).size, 1);

  });

  await t.test('publishing and cloning validate existing draft selections', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Publish limit', slug: 'publish-limit',
        exploreResources: { events: selection('events', 3) },
      },
    });
    const saved = await read(blog.documentId);
    // Simulate legacy data that was written outside the Document Service.
    await app.db.query('blog-and-casestudies.explore-resources').update({
      where: { id: saved.exploreResources.id },
      data: { events: { connect: [resources.events[3].id] } },
    });
    await assert.rejects(blogs.publish({ documentId: blog.documentId }), exceedsLimit);
    assert.equal(await blogs.findOne({ documentId: blog.documentId, status: 'published' }), null);
    const beforeCount = await blogs.count();
    await assert.rejects(blogs.clone({
      documentId: blog.documentId,
      data: { slug: 'invalid-clone' },
    }), exceedsLimit);
    assert.equal(await blogs.count(), beforeCount);
  });
});

'use strict';

const assert = require('node:assert/strict');
const { mkdtemp, rm } = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { setTimeout: delay } = require('node:timers/promises');

process.env.NODE_ENV = 'test';
process.env.STRAPI_TELEMETRY_DISABLED = 'true';
process.env.JWT_SECRET = 'blog-profile-test-users-permissions-secret';

const { createStrapi } = require('@strapi/strapi');
const configureBlogProfiles = require('../src/bootstrap/configure-blog-profiles');
const BLOG_UID = 'api::blog.blog';
const PROFILE_UID = 'api::profile.profile';
const populate = { profile: { populate: ['profilePicture'] }, blogProfileSection: true };

test('Blog types and reusable Profiles work in Strapi', async (t) => {
  const testDir = await mkdtemp(path.join(os.tmpdir(), 'tcules-blog-profiles-'));
  const app = createStrapi({ appDir: path.resolve(__dirname, '..') });
  app.config.set('database', {
    connection: {
      client: 'sqlite',
      connection: { filename: path.join(testDir, 'test.db') },
      useNullAsDefault: true,
    },
  });
  app.config.set('server.app.keys', ['blog-profile-test-key']);
  app.config.set('admin.auth.secret', 'blog-profile-test-auth-secret');
  app.config.set('admin.apiToken.salt', 'blog-profile-test-api-salt');
  app.config.set('admin.transfer.token.salt', 'blog-profile-test-transfer-salt');
  app.config.set('admin.secrets.encryptionKey', 'blog-profile-test-encryption-key');
  app.config.set('admin.serveAdminPanel', false);

  t.after(async () => {
    const pool = app.db.connection.client.pool;
    while (pool.numUsed() > 0 || pool.numPendingAcquires() > 0) await delay(10);
    await app.destroy();
    await rm(testDir, { recursive: true, force: true });
  });

  await app.load();
  const blogs = app.documents(BLOG_UID);
  const profiles = app.documents(PROFILE_UID);
  const contentTypes = app.plugin('content-manager').service('content-types');
  const blogModel = contentTypes.findContentType(BLOG_UID);
  const profileModel = contentTypes.findContentType(PROFILE_UID);
  const readBlogConfig = () => contentTypes.findConfiguration(blogModel);

  await t.test('positions new fields and labels the relation by profile name', async () => {
    const configuration = await readBlogConfig();
    assert.deepEqual(configuration.layouts.edit[0], [{ name: 'blogType', size: 6 }]);
    const fields = configuration.layouts.edit.flat().map(({ name }) => name);
    assert.equal(fields.indexOf('profile'), fields.indexOf('blogProfileSection') + 1);
    assert.equal(configuration.metadatas.blogType.edit.label, 'Blog Type');
    assert.equal(configuration.metadatas.profile.edit.mainField, 'name');
    const profileConfig = await contentTypes.findConfiguration(profileModel);
    assert.equal(profileConfig.settings.mainField, 'name');
    assert.equal(profileConfig.metadatas.profilePicture.edit.label, 'Profile Picture');
    assert.equal(profileConfig.metadatas.linkedInProfile.edit.label, 'LinkedIn Profile');
  });

  await t.test('upgrades saved editor layouts without changing existing fields or settings', async () => {
    const configuration = await readBlogConfig();
    const oldRows = [
      [{ name: 'slug', size: 8 }, { name: 'title', size: 4 }],
      ...configuration.layouts.edit.filter((row) => !row.some(({ name }) => ['blogType', 'profile', 'slug', 'title'].includes(name))),
    ];
    configuration.layouts.edit = [...oldRows, [{ name: 'blogType', size: 6 }, { name: 'profile', size: 6 }]];
    configuration.settings.pageSize = 20;
    configuration.metadatas.blogProfileSection.edit.label = 'Existing Blog Profile';
    await contentTypes.updateConfiguration(blogModel, configuration);
    await app.store({ type: 'core', name: 'blog-profiles', key: 'editor-layout-v1' }).delete();

    await configureBlogProfiles(app);
    const upgraded = await readBlogConfig();
    assert.equal(upgraded.settings.pageSize, 20);
    assert.equal(upgraded.metadatas.blogProfileSection.edit.label, 'Existing Blog Profile');
    assert.deepEqual(upgraded.layouts.edit.filter((row) => !row.some(({ name }) => ['blogType', 'profile'].includes(name))), oldRows);
    const fields = upgraded.layouts.edit.flat().map(({ name }) => name);
    assert.equal(fields[0], 'blogType');
    assert.equal(fields.indexOf('profile'), fields.indexOf('blogProfileSection') + 1);
    assert.equal(fields.filter((name) => name === 'blogType').length, 1);
    assert.equal(fields.filter((name) => name === 'profile').length, 1);

    upgraded.metadatas.blogType.edit.label = 'Custom type label';
    upgraded.layouts.edit.push(upgraded.layouts.edit.shift());
    await contentTypes.updateConfiguration(blogModel, upgraded);
    await configureBlogProfiles(app);
    assert.deepEqual(await readBlogConfig(), upgraded);
  });

  await t.test('existing posts can omit the new fields and keep their Blog Profile component', async () => {
    const blog = await blogs.create({
      data: {
        title: 'Existing post', slug: 'existing-post',
        blogProfileSection: [{ name: 'Existing author', designation: 'Editor' }],
      },
    });
    await blogs.update({ documentId: blog.documentId, data: { title: 'Edited existing post' } });
    const saved = await blogs.findOne({ documentId: blog.documentId, populate });
    assert.equal(saved.blogType, null);
    assert.equal(saved.profile, null);
    assert.equal(saved.blogProfileSection[0].name, 'Existing author');
  });

  await t.test('accepts every Blog Type and rejects values outside the dropdown', async () => {
    for (const blogType of ['Articles', 'Guides', 'Videos', 'Research']) {
      const blog = await blogs.create({ data: { title: blogType, slug: blogType.toLowerCase(), blogType } });
      assert.equal(blog.blogType, blogType);
    }
    await assert.rejects(blogs.create({
      data: { title: 'Invalid type', slug: 'invalid-type', blogType: 'Other' },
    }), { name: 'ValidationError' });
  });

  await t.test('reuses, updates, replaces, publishes and removes a Profile independently', async () => {
    const picture = await app.db.query('plugin::upload.file').create({
      data: {
        name: 'profile.jpg', hash: 'test_profile', ext: '.jpg', mime: 'image/jpeg',
        size: 1, url: '/uploads/profile.jpg', provider: 'local',
      },
    });
    const profile = await profiles.create({
      data: {
        profilePicture: picture.id, name: 'Alex Doe', designation: 'Researcher',
        description: 'A **researcher** and writer.', linkedInProfile: 'https://www.linkedin.com/in/alex-doe/',
      },
    });
    const first = await blogs.create({
      data: {
        title: 'First post', slug: 'first-post', blogType: 'Research',
        profile: profile.documentId,
        blogProfileSection: [{ name: 'Legacy author', designation: 'Contributor' }],
      },
    });
    const second = await blogs.create({
      data: { title: 'Second post', slug: 'second-post', profile: profile.documentId },
    });
    await profiles.update({ documentId: profile.documentId, data: { designation: 'Lead Researcher' } });
    for (const blog of [first, second]) {
      const saved = await blogs.findOne({ documentId: blog.documentId, populate });
      assert.equal(saved.profile.documentId, profile.documentId);
      assert.equal(saved.profile.designation, 'Lead Researcher');
      assert.equal(saved.profile.profilePicture.id, picture.id);
      assert.equal(saved.profile.description, 'A **researcher** and writer.');
      assert.equal(saved.profile.linkedInProfile, 'https://www.linkedin.com/in/alex-doe/');
    }
    await blogs.publish({ documentId: first.documentId });
    const published = await blogs.findOne({ documentId: first.documentId, status: 'published', populate });
    assert.equal(published.profile.documentId, profile.documentId);
    assert.equal(published.blogType, 'Research');
    assert.equal(published.blogProfileSection[0].name, 'Legacy author');

    const replacement = await profiles.create({ data: { name: 'Sam Doe' } });
    await blogs.update({ documentId: second.documentId, data: { profile: replacement.documentId } });
    assert.equal((await blogs.findOne({ documentId: second.documentId, populate })).profile.documentId, replacement.documentId);
    await blogs.update({ documentId: second.documentId, data: { profile: null } });
    assert.equal((await blogs.findOne({ documentId: second.documentId, populate })).profile, null);

    await profiles.delete({ documentId: profile.documentId });
    const survivingBlog = await blogs.findOne({ documentId: first.documentId, populate });
    assert.equal(survivingBlog.profile, null);
    assert.equal(survivingBlog.blogProfileSection[0].name, 'Legacy author');
  });

  await t.test('validates LinkedIn URLs while allowing the optional field to be blank', async () => {
    await assert.rejects(profiles.create({ data: { name: 'Invalid URL', linkedInProfile: 'not-a-url' } }), { name: 'ValidationError' });
    await assert.rejects(profiles.create({ data: { name: 'Unsafe URL', linkedInProfile: 'javascript:alert(1)' } }), { name: 'ValidationError' });
    await profiles.create({ data: { name: 'No LinkedIn URL', linkedInProfile: '' } });
  });
});

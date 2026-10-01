'use strict';

const { errors: { ValidationError } } = require('@strapi/utils');

const BLOG_UID = 'api::blog.blog';
const MAX_RESOURCES = 3;
const RESOURCE_FIELDS = ['events', 'blogs', 'podcasts'];
const WRITE_ACTIONS = new Set(['create', 'update', 'clone', 'publish', 'discardDraft']);
const MESSAGE = 'Explore Resources can contain a maximum of 3 resources in total across Events, Blogs, and Podcasts.';

module.exports = (strapi) => async (context, next) => {
  if (context.uid !== BLOG_UID || !WRITE_ACTIONS.has(context.action)) {
    return next();
  }

  // Validate the resolved relations so partial connect/disconnect updates are
  // counted correctly. Keep the write and validation in the same transaction
  // so an invalid selection also rolls back changes to nested components.
  return strapi.db.transaction(async () => {
    const result = await next();
    const entries = result?.entries ?? (result ? [result] : []);

    for (const entry of entries) {
      const savedEntry = await strapi.db.query(BLOG_UID).findOne({
        where: { id: entry.id },
        select: ['id'],
        populate: {
          exploreResources: {
            populate: Object.fromEntries(
              RESOURCE_FIELDS.map((field) => [field, { select: ['id', 'documentId'] }])
            ),
          },
        },
      });

      const resourceCount = RESOURCE_FIELDS.reduce((total, field) => {
        const resources = savedEntry?.exploreResources?.[field] ?? [];
        // Components can reference both the draft and published rows of a
        // resource. Those rows represent a single selection in the editor.
        return total + new Set(resources.map((resource) => resource.documentId ?? resource.id)).size;
      }, 0);

      if (resourceCount > MAX_RESOURCES) {
        throw new ValidationError(MESSAGE, {
          errors: [{ path: ['exploreResources'], message: MESSAGE, name: 'ValidationError' }],
        });
      }
    }

    return result;
  });
};

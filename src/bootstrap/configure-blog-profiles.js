'use strict';

// Content Manager persists layouts in the database. Schema attribute order
// alone would leave the new fields at the bottom on existing installations.
module.exports = async (strapi) => {
  const migration = strapi.store({
    type: 'core',
    name: 'blog-profiles',
    key: 'editor-layout-v1',
  });
  if (await migration.get()) return;

  const contentTypes = strapi.plugin('content-manager').service('content-types');
  const blogModel = contentTypes.findContentType('api::blog.blog');
  const blog = await contentTypes.findConfiguration(blogModel);
  const edit = blog.layouts.edit
    .map((row) => row.filter(({ name }) => name !== 'blogType' && name !== 'profile'))
    .filter((row) => row.length > 0);

  edit.unshift([{ name: 'blogType', size: 6 }]);
  const profileSectionRow = edit.findIndex((row) => row.some(({ name }) => name === 'blogProfileSection'));
  edit.splice(profileSectionRow < 0 ? edit.length : profileSectionRow + 1, 0, [{ name: 'profile', size: 6 }]);
  blog.layouts.edit = edit;
  blog.metadatas.blogType.edit.label = 'Blog Type';
  blog.metadatas.blogType.list.label = 'Blog Type';
  blog.metadatas.profile.edit.label = 'Profile';
  blog.metadatas.profile.edit.mainField = 'name';
  blog.metadatas.profile.list.label = 'Profile';
  await contentTypes.updateConfiguration(blogModel, blog);

  const profileModel = contentTypes.findContentType('api::profile.profile');
  const profile = await contentTypes.findConfiguration(profileModel);
  profile.settings.mainField = 'name';
  const labels = {
    profilePicture: 'Profile Picture',
    name: 'Name',
    designation: 'Designation',
    description: 'Description',
    linkedInProfile: 'LinkedIn Profile',
  };
  for (const [field, label] of Object.entries(labels)) {
    profile.metadatas[field].edit.label = label;
    profile.metadatas[field].list.label = label;
  }
  await contentTypes.updateConfiguration(profileModel, profile);

  // Apply once so subsequent editor layout customizations survive restarts.
  await migration.set({ value: true });
};

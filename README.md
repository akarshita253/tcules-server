# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## Blog types and profiles

Blogs include an optional `blogType` dropdown with `Articles`, `Guides`, `Videos`, and `Research`.
The optional `profile` relation selects one independently managed Profile; the same Profile can be reused by multiple blogs.
The existing repeatable `blogProfileSection` component remains available and keeps its data.

Manage Profiles in Content Manager → Profile. Each Profile has a single image (`profilePicture`),
`name`, `designation`, rich-text `description`, and an optional HTTP(S) URL (`linkedInProfile`).
Profiles are available immediately after saving, without a separate publishing step.
The Profile API uses the standard `/api/profiles` routes and existing Strapi role/API-token permissions.
To include a blog's selected profile and its image in a REST response, use
`/api/blogs?populate[profile][populate][0]=profilePicture`.

Deploy the code, rebuild the admin panel (`npm run build`), and restart Strapi.
Startup adds the schema fields and applies a one-time Content Manager layout update:
Blog Type appears above Title and Slug, and Profile appears directly after Blog Profile.
Other saved layout rows and settings are preserved, and later editor customizations survive restarts.
Existing blogs can continue to omit both new fields.

Run `npm run test:blog-profiles` for database-backed checks of the new fields, relations, and editor layout update.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

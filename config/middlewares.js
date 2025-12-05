module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
    {
    name: "strapi::cors",
    config: {
      origin: ["https://tcules-client.vercel.app"],
      headers: "*",
      methods: "*",
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

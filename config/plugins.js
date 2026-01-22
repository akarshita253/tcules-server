module.exports = ({ env }) => ({
 upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          responsiveDimensions: true,
        },
        delete: {},
        uploadStream: {},
      },
    },
  },
  email: {
    config: {
      provider: "mailersend",
      providerOptions: {
        apiKey: env("MAILERSEND_API_KEY"),
      },
      settings: {
        defaultFrom: env("MAILERSEND_DEFAULT_FROM", "no-reply@yourdomain.com"),
        defaultReplyTo: env("MAILERSEND_DEFAULT_REPLY", "support@yourdomain.com"),
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',         
      shadowCRUD: true, 
      playgroundAlways: false, 
      depthLimit: 10,
      amountLimit: 100,
      maxLimit: 500,
      apolloServer: {
        introspection: true,
        tracing: false,
      },
    },
  },
});
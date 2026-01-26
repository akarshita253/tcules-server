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
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env.int("SMTP_PORT", 587),
        secure: false,
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: "no-reply@yourdomain.com",
        defaultReplyTo: "support@yourdomain.com",
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
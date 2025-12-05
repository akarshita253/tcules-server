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
        upload: {},
        delete: {},
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
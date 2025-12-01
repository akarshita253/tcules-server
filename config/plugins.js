module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',          // Change the endpoint URL if needed
      shadowCRUD: true,              // Auto-generate queries/mutations (recommended)
      playgroundAlways: false,      // Enable playground in production (default: false)
      depthLimit: 10,                // Prevent overly deep queries
      amountLimit: 100,              // Max items per query (default: 100)
      maxLimit: 500,                 // Absolute max (use -1 for unlimited)
      apolloServer: {
        introspection: true,        // Allow schema introspection
        tracing: false,
        // Add any other Apollo Server options here
      },
    },
  },
});
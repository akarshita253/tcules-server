const GMAIL_API_PROVIDER = "strapi-provider-email-gmail-api";

const createEmailConfig = (env) => {
  const provider = env("EMAIL_PROVIDER", GMAIL_API_PROVIDER).toLowerCase();
  const settings = {
    defaultFrom: env("EMAIL_DEFAULT_FROM", "hello@tcules.com"),
    defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO", "hello@tcules.com"),
  };

  if (provider === "sendgrid") {
    return {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY", ""),
      },
      settings,
    };
  }

  return {
    provider: GMAIL_API_PROVIDER,
    providerOptions: {
      clientEmail: env("GOOGLE_SERVICE_ACCOUNT_EMAIL", "strapi-gmail-sender-938@tcules-strapi-gmail.iam.gserviceaccount.com"),
      privateKey: env("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY", "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDrLV0JlWPb8fpA\nwkjJyZcxT86F6tTCxD8THQ1IbE68SufAaW54evRRCyM7YAwFvEomO3N2rbbT08GR\nMC2K8a6Hu9XqGER40NUldjG1euEd3GRLvVq2Wej4OMxGd7QM//kZEsCFgxBQBq16\ntSHc5jEY/eSD2xFu/nXAnz3GaX9mVVP4iHCZlItYCG3DeMe+mS8+vFx5LNuMDG9u\nb30wjclaKJCVEa0yfDHUvZqQUf9S4Pel1Ke/ybbKm3jbTlRfC/Yvn7spjs1VRg9o\nTxaEzrMmOAl/gm9+sf/Oppw4MWrgqKg/ONNH4Uzr8b4h0QGz98UHmlxc2sfev47J\nC8GUGNbTAgMBAAECggEAXskjzG8HlmhKwrsLdzjm1RsjU9o38mACRAPbjKsKeN1/\n1o8n1StJOTjR9GZbshwXjp07hkOxgmLAi3HtiSirfU15hCZPwpn4rmaa1lg2T0C6\ns8QXwZMvUIwj2Or6CJtKnI5wRd9zPa3TUbebdFrawwXhijtLJX8tmnsT/NocXPOV\nYILEWDm5v7cT4Kl2yU4auvsyYGqC9QuBr+Te2wbbLTM/OKPkHt2PKQFTah797IVo\nc+JBStJXfEVRny1MfQHkM9nOyXFdN+zIkfqNaUPcpOrHmDCaw/w3H+bfZIUsPDpY\nmBcnpY0oSb8mUQuKJW0043+Q6iVUx90A1qVlwRYu0QKBgQD1rpQk3sPIfGW0pHIZ\nQhKcHiqfvIH1NbHhDNDytcDapeJQ42Csd8kKHttUgcJwbXcUdPSIp4J3O6eFGqiB\n+ersMqNuFmJEYGLMtEFk1zApIQRjAicvck3JZfUo14iEs7GuBucGlroMOv2mzA5W\nukxMG2s+DNfgBN/YcmvRpCLVdwKBgQD1DdgaizVhyj2QUjSRbEEQh2tw/Ui6Q19l\nHovi95NwQ5fUnq9FNFXcfxThXTc59i/c2/zROGGWcw1Tj6gD9MIf+Md5c4xNoU4t\nEFQGHX1MCw+rWHeoSbsyFdP61iN+UuSX/67TBgvEqnIuZlDCCE+NTq/6G04HGvdf\ndtaOeLuQhQKBgQCrDUKNrR+I7btuGvRpy4vjcEli779Xt2vCccbkxVChqs84XCcJ\nzViGmFdCrhlvZ3d6IbfDkUUPuNP4o0fhPtymWNdapXEDhEwlk/bXu88HQ7qnKG+Z\n5C5uY3NeXTnqkqXJsXqWJskgDM5fnED7dzf54Tk4eX6vtRUYwQl6a5npHwKBgCkX\n7ztUSNljPruq7WHNk4OgEeZasw15KtAcNT0UY0caLqXbDm0+f3+AWBIKva4cmJ4i\nzdyP5d2C4aM3nec77inKYDj/pXGHMULhUBXOcCqGWFRVe4tfAeM+QdP4gO84G1lZ\n6Qk+JE8QfiFFyxkep6h8n4oDdiw+22jI1uYBXQK5AoGAF8BSpJtXger3bgwBN+YY\nZJ9Mcmc9ZHwDPoQbNOmjcfdtsU7Zw4nayR0a9QMbfpUPPmVp+suvXO4uEjyS0jAu\nDGjU76hrurphOawdZ+lTsT2gw1UH3VQ3uTVPmgCY2oFR+QeQyNruafYYcdziHYBo\nzafqRusCnFKuy0CvQ6H1GdQ=\n-----END PRIVATE KEY-----\n"),
      senderEmail: env("GMAIL_SENDER_EMAIL", "hello@tcules.com"),
    },
    settings,
  };
};

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
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
    config: createEmailConfig(env),
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
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

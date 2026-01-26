const lifecycles = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "paragsoni849@gmail.com",
          replyTo: result.email,
          subject: `New Client Query from ${result.name}`,
          html: `
          <h3>New Client Contact</h3>
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Message:</strong></p>
          <p>${result.message}</p>
        `,
        });

      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: result.email,
          subject: "We received your query",
          html: `
          <p>Hi ${result.name},</p>
          <p>Thanks for contacting us. We'll get back shortly.</p>
        `,
        });
    } catch (err) {
      strapi.log.error("Nodemailer email error", err);
    }
  },
};

export default lifecycles;

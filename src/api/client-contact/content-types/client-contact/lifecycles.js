const lifecycles = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugin("email").service("email").send({
        to: "hello@tcules.com",
        replyTo: result.clientEmail,
        subject: `New Client Query from ${result.clientName}`,
        html: `
          <h3>New Client Contact</h3>
          <p><strong>Name:</strong> ${result.clientName}</p>
          <p><strong>Email:</strong> ${result.clientEmail}</p>
          <p><strong>Company:</strong> ${result.clientCompany}</p>
          <p><strong>Contact:</strong> ${result.clientContact}</p>
          <p><strong>Message:</strong></p>
          <p>${result.clientComments}</p>
        `,
      });

      await strapi.plugin("email").service("email").send({
        to: result.clientEmail,
        subject: "We received your query",
        html: `
          <p>Hi ${result.clientName},</p>
          <p>Thanks for contacting us. We'll get back shortly.</p>
        `,
      });
    } catch (err) {
      strapi.log.error("Email sending failed", err);
    }
  },
};

export default lifecycles;
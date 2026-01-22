export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugin("email").service("email").send({
        to: "paragsoni849@gmail.com",
        subject: "New Contact Form Submission",
        html: `
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Message:</strong> ${result.message}</p>
        `,
      });
    } catch (err) {
      strapi.log.error("Failed to send MailerSend email", err);
    }
  },
};

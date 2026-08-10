"use strict";

const lifecycles = {
  async afterCreate(event) {
    const { result } = event;

    // Strapi creates both a draft row and a published row when a Draft &
    // Publish content type is created through the core REST API. Database
    // lifecycles run for both rows, so only the published row should notify.
    if (!result?.publishedAt) {
      return;
    }

    const notificationRecipients = strapi.config.get(
      "custom.contactNotificationRecipients"
    );

    try {
      await strapi.plugin("email").service("email").send({
        to: notificationRecipients,
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

module.exports = lifecycles;

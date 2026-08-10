"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");

const lifecycles = require(
  "../src/api/client-contact/content-types/client-contact/lifecycles"
);

const notificationRecipients = [
  "jatin@tcules.com",
  "rakesh@tcules.com",
  "dhrumil@tcules.com",
  "hello@tcules.com",
];

const contact = {
  documentId: "contact-document-id",
  clientName: "Test Client",
  clientEmail: "client@example.com",
  clientCompany: "Example Company",
  clientContact: "+1 555 0100",
  clientComments: "Please contact me.",
};

test("sends one notification pair for Strapi draft and published rows", async (t) => {
  const originalStrapi = global.strapi;
  const sentMessages = [];

  global.strapi = {
    config: {
      get(key) {
        assert.equal(key, "custom.contactNotificationRecipients");
        return notificationRecipients;
      },
    },
    plugin(name) {
      assert.equal(name, "email");
      return {
        service(serviceName) {
          assert.equal(serviceName, "email");
          return {
            async send(message) {
              sentMessages.push(message);
            },
          };
        },
      };
    },
    log: {
      error() {
        assert.fail("No email error was expected");
      },
    },
  };

  t.after(() => {
    global.strapi = originalStrapi;
  });

  await lifecycles.afterCreate({
    result: { ...contact, id: 1, publishedAt: null },
  });
  await lifecycles.afterCreate({
    result: { ...contact, id: 2, publishedAt: "2026-08-10T00:00:00.000Z" },
  });

  assert.equal(sentMessages.length, 2);
  assert.deepEqual(sentMessages[0].to, notificationRecipients);
  assert.equal(sentMessages[0].replyTo, contact.clientEmail);
  assert.equal(sentMessages[1].to, contact.clientEmail);
  assert.equal(sentMessages[1].subject, "We received your query");
});

"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");

const provider = require("..");
const { createProvider, defaultCreateGmailClient, normalizePrivateKey } =
  provider.__testing;

test("normalizes escaped private-key newlines", () => {
  assert.equal(normalizePrivateKey("line-1\\nline-2"), "line-1\nline-2");
});

test("creates an official Gmail API client without making a request", () => {
  const client = defaultCreateGmailClient({
    clientEmail: "service-account@example.iam.gserviceaccount.com",
    privateKey: "not-used-until-a-request-is-authorized",
    senderEmail: "hello@tcules.com",
  });

  assert.equal(typeof client.users.messages.send, "function");
});

test("initializes without credentials and fails only when sending", async () => {
  const testProvider = createProvider({
    createMimeTransport: () => ({
      sendMail: async () => ({ message: Buffer.from("mime") }),
    }),
  });
  const email = testProvider.init({}, { defaultFrom: "hello@tcules.com" });

  await assert.rejects(
    email.send({ to: "recipient@example.com", subject: "Test", text: "Hello" }),
    /Gmail API credentials are missing/
  );
});

test("sends a base64url MIME message as the configured Workspace user", async () => {
  let gmailCredentials;
  let gmailRequest;
  let mimeOptions;
  const testProvider = createProvider({
    createGmailClient: (credentials) => {
      gmailCredentials = credentials;
      return {
        users: {
          messages: {
            send: async (request) => {
              gmailRequest = request;
              return { data: { id: "gmail-message-id" } };
            },
          },
        },
      };
    },
    createMimeTransport: () => ({
      sendMail: async (options) => {
        mimeOptions = options;
        return { message: Buffer.from("generated MIME message") };
      },
    }),
  });
  const email = testProvider.init(
    {
      clientEmail: "service-account@example.iam.gserviceaccount.com",
      privateKey: "private\\nkey",
      senderEmail: "hello@tcules.com",
    },
    { defaultReplyTo: "hello@tcules.com" }
  );

  const result = await email.send({
    from: "ignored@example.com",
    to: ["jatin@tcules.com", "rakesh@tcules.com", "dhrumil@tcules.com", "hello@tcules.com"],
    replyTo: "customer@example.com",
    subject: "New contact",
    html: "<p>Hello</p>",
  });

  assert.deepEqual(gmailCredentials, {
    clientEmail: "service-account@example.iam.gserviceaccount.com",
    privateKey: "private\nkey",
    senderEmail: "hello@tcules.com",
  });
  assert.equal(mimeOptions.from, "hello@tcules.com");
  assert.deepEqual(mimeOptions.to, [
    "jatin@tcules.com",
    "rakesh@tcules.com",
    "dhrumil@tcules.com",
    "hello@tcules.com",
  ]);
  assert.equal(mimeOptions.replyTo, "customer@example.com");
  assert.equal(
    gmailRequest.requestBody.raw,
    Buffer.from("generated MIME message").toString("base64url")
  );
  assert.equal(gmailRequest.userId, "me");
  assert.deepEqual(result, { id: "gmail-message-id" });
});

test("requires at least one recipient", async () => {
  const testProvider = createProvider({
    createMimeTransport: () => ({
      sendMail: async () => ({ message: Buffer.from("mime") }),
    }),
  });
  const email = testProvider.init({}, { defaultFrom: "hello@tcules.com" });

  await assert.rejects(email.send({ subject: "Test" }), /recipient is required/);
});

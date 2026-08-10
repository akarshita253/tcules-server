"use strict";

const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const GMAIL_SEND_SCOPE = "https://www.googleapis.com/auth/gmail.send";

const normalizePrivateKey = (privateKey) =>
  String(privateKey || "")
    .replace(/\\n/g, "\n")
    .trim();

const defaultCreateGmailClient = ({ clientEmail, privateKey, senderEmail }) => {
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [GMAIL_SEND_SCOPE],
    subject: senderEmail,
  });

  return google.gmail({ version: "v1", auth });
};

const defaultCreateMimeTransport = () =>
  nodemailer.createTransport({
    streamTransport: true,
    buffer: true,
    newline: "unix",
  });

const createProvider = ({
  createGmailClient = defaultCreateGmailClient,
  createMimeTransport = defaultCreateMimeTransport,
} = {}) => ({
  init(providerOptions = {}, settings = {}) {
    const clientEmail = String(providerOptions.clientEmail || "").trim();
    const privateKey = normalizePrivateKey(providerOptions.privateKey);
    const senderEmail = String(
      providerOptions.senderEmail || settings.defaultFrom || ""
    ).trim();
    const mimeTransport = createMimeTransport();
    let gmailClient;

    const getGmailClient = () => {
      if (!clientEmail || !privateKey) {
        throw new Error(
          "Gmail API credentials are missing. Configure " +
            "GOOGLE_SERVICE_ACCOUNT_EMAIL and " +
            "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY."
        );
      }

      if (!senderEmail) {
        throw new Error(
          "Gmail sender is missing. Configure GMAIL_SENDER_EMAIL."
        );
      }

      if (!gmailClient) {
        gmailClient = createGmailClient({
          clientEmail,
          privateKey,
          senderEmail,
        });
      }

      return gmailClient;
    };

    return {
      async send(options = {}) {
        const {
          to,
          cc,
          bcc,
          replyTo,
          subject,
          text,
          html,
          attachments,
          headers,
        } = options;

        if (!to && !cc && !bcc) {
          throw new Error("At least one email recipient is required.");
        }

        const generatedMessage = await mimeTransport.sendMail({
          from: senderEmail,
          to,
          cc,
          bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text: text || html,
          html: html || text,
          attachments,
          headers,
        });
        const raw = generatedMessage.message.toString("base64url");
        const response = await getGmailClient().users.messages.send({
          userId: "me",
          requestBody: { raw },
        });

        return response.data;
      },
    };
  },
});

const provider = createProvider();

Object.defineProperty(provider, "__testing", {
  value: {
    createProvider,
    defaultCreateGmailClient,
    normalizePrivateKey,
  },
});

module.exports = provider;

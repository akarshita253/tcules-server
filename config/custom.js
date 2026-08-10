const DEFAULT_CONTACT_NOTIFICATION_RECIPIENTS = [
  "jatin@tcule.com",
  "rakesh@tcules.com",
  "mihir@tcules.com",
];

module.exports = ({ env }) => {
  const configuredRecipients = env.array(
    "CONTACT_NOTIFICATION_RECIPIENTS",
    DEFAULT_CONTACT_NOTIFICATION_RECIPIENTS
  );
  const contactNotificationRecipients = [
    ...new Set(
      configuredRecipients.map((address) => address.trim()).filter(Boolean)
    ),
  ];

  return {
    contactNotificationRecipients:
      contactNotificationRecipients.length > 0
        ? contactNotificationRecipients
        : DEFAULT_CONTACT_NOTIFICATION_RECIPIENTS,
  };
};

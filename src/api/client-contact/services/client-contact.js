'use strict';

/**
 * client-contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-contact.client-contact');

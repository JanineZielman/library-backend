'use strict';

/**
 * inside service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inside.inside');

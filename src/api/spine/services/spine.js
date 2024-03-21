'use strict';

/**
 * spine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spine.spine');

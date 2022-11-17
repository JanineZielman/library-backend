'use strict';

/**
 * binding router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::binding.binding');

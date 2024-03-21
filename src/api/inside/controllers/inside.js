'use strict';

/**
 * inside controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inside.inside');

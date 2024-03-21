'use strict';

/**
 * binding controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::binding.binding');

'use strict';

const Boom = require('@hapi/boom');
const Data = require('../data');

module.exports = {
  method: 'GET',
  path: '/users/{slug}',
  options: {
    handler: async request => {
      const { slug } = request.params;
      const user = Data.getUser(slug);

      if (!user) {
        throw Boom.notFound("Sorry, the user doesn't exist");
      }

      return user;
    },
  },
};

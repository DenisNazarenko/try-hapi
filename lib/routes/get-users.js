'use strict';

const Data = require('../data');

module.exports = {
  method: 'GET',
  path: '/users',
  options: {
    handler: async request => {
      return Data.users;
    },
  },
};

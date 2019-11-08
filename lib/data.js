'use strict';

exports.getUser = slug => {
  const bySlug = user => user.slug === slug;

  return exports.users.find(bySlug);
};

exports.users = [
  {
    slug: 'denis',
    name: 'Denis',
  },
  {
    slug: 'daniel',
    name: 'Daniel',
  },
  {
    slug: 'lidia',
    name: 'Lidia',
  },
];

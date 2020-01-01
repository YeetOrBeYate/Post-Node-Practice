// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host:'localhost',
      database: 'test',
      user: 'postgres',
      password: process.env['PASSWORD']
    },
    seeds:{directory:"./data/seeds"}
  },
};

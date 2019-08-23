require('dotenv').config()

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  db: {
    url: process.env.DB
  },
  port: process.env.PORT || 3001,
  // 10 days in minutes
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT
  },
  logging: true
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

module.exports = config;
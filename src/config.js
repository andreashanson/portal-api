if (process.env.NODE_ENV === 'development') require('dotenv').config();

const config = {
  mongo_uri: process.env.MONGO_URI,
  app_host: process.env.APP_HOST
}

module.exports = config;

const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const options = {
  dialect: 'postgres',
  logging: !config.isProd,
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(config.dbUrl, options);

module.exports = sequelize;

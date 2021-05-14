require('dotenv').config({ path: './config/.env' });

const environment = process.env.NODE_ENV || 'development';
const dialect = 'postgres';
const url = process.env.DATABASE_URL;
const database = process.env.DATABASE
const devMode = environment === 'development' || environment === 'test';
const config = {
  url,
  dialect,
  database,
  logging: devMode ? (log) => log : false,
  dialectOptions: {
    multipleStatements: true,
  },
};
module.exports = config;

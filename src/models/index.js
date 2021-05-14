'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config');
const db = {};
let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url);
} else {
  sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Database Connection has been established successfully.'.success
    );
  } catch (err) {
    console.error('Unable to connect to the database:'.error, err);
  }
})();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

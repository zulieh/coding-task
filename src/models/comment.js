'use strict';

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      episodeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};

'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      dailyPass: {
        type: DataTypes.STRING,
        allowNull: false
      },
      monthly: {
        type: DataTypes.STRING,
        allowNull: false
      },
      singleJourney: {
        type: DataTypes.STRING,
        allowNull: false
      },
      return: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fairs');
  }
};
'use strict';
const { DataTypes } = require('sequelize')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tolls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tollName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      District: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Branch: {
        type: DataTypes.STRING,
        allowNull: false
      },
      section: {
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
    await queryInterface.dropTable('Tolls');
  }
};
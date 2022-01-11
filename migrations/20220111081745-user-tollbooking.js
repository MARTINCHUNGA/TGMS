'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      'userbooking', {
        createdAt : {
          allowNull : false,
          type : DataTypes.DATE
        },
        updatedAt : {
          allowNull : false,
          type : DataTypes.DATE
        },
        userId : {
          type : DataTypes.INTEGER,
          primaryKey : true
        },
        tollbookingId : {
          type : DataTypes.INTEGER,
          primaryKey : true
        }
      }
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('userbooking')
    
  }
};

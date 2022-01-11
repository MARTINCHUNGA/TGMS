'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'TollBooking',   //name of the target model
      'toll_id',       // name of the key we are adding
       {

      type : DataTypes.INTEGER,
      references: {
        model : 'Tolls',  // name of the source model
        key : 'id'
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'  
      }
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn(
      'TollBooking',  //name of the target model
      'toll_id'       // key we want to remove
      )
    
  }
};

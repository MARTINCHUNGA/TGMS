'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('fair',{
    id: {
      type: DataTypes.INTEGER,
       primaryKey : true,
       autoIncrement: true
    },
    dailyPass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    monthly:{
      type: DataTypes.STRING,
      allowNull: false
    },
    singleJourney:{
      type: DataTypes.STRING,
      allowNull: false
    },
    return:{
      type: DataTypes.STRING,
      allowNull:false
    },

  });
  
}











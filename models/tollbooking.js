'use strict';


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('TollBooking',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.STRING,
      allowNull: false
    },
    tollName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    tripPlan:{
      type: DataTypes.STRING,
      allowNull:false
    },
  
  });
  
}


'use strict';

module.exports = (sequelize,DataTypes) => {
  return sequelize.define('vehicle',{
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
  });
}




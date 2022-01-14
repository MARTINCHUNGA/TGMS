'use strict';

module.exports = (sequelize,DataTypes) => {
  return sequelize.define('toll',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    Branch: {
      type: DataTypes.STRING,
      allowNull: true
    },
    section:{
      type: DataTypes.STRING,
      allowNull: true
    },
    tollName:{
      type: DataTypes.STRING,
      allowNull: true
    },
    District:{
      type: DataTypes.STRING,
      allowNull:true
    },
    
  });
}


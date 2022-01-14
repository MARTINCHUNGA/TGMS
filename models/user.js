'use strict';

module.exports = (sequelize,DataTypes) => {
  return sequelize.define('user',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false
    },
    DoB:{
      type: DataTypes.STRING,
      allowNull:false
    },
    
  });
}


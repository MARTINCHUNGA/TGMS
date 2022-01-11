'use strict';

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const post = connection.define('post',{
  id: {
    type: DataTypes.UUID,
    primaryKey:true,
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
  timestamps : true
});







const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};
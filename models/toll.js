'use strict';

const user = require('../models/user')
const TollBooking = require('../models/tollbooking')

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const toll = connection.define('toll',{
  id: {
    type: DataTypes.UUID,
    primaryKey:true,
    autoIncrement: true
  },
  Branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  section:{
    type: DataTypes.STRING,
    allowNull: false
  },
  tollName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  District:{
    type: DataTypes.STRING,
    allowNull:false
  },
  timestamps : true
});

user.belongsToMany(TollBooking, {as: "relatedA",through: "usertollbooking", foreignKey:"user_id"})
TollBooking.belongsToMany(user, {as: "relatedB",through: "usertollbooking", foreignKey:"tollbooking_id"})
toll.hasMany(TollBooking, {foreignKey:'toll_id'})


module.exports = toll



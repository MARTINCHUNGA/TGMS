'use strict';

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const fair = connection.define('fair',{
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


module.exports = fair




// module.exports = (sequelize, DataTypes) => {
//   class Fair extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Fair.init({
//     dailyPass: DataTypes.STRING,
//     monthly: DataTypes.STRING,
//     singleJourney: DataTypes.STRING,
//     return: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Fair',
//   });
//   return Fair;
// };
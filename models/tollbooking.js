'use strict';

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const TollBooking = connection.define('TollBooking',{
  id: {
    type: DataTypes.UUID,
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
  timestamps : true
});

module.exports = TollBooking


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class TollBooking extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   TollBooking.init({
//     vehicleType: DataTypes.STRING,
//     price: DataTypes.STRING,
//     tollName: DataTypes.STRING,
//     tripPlan: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'TollBooking',
//   });
//   return TollBooking;
// };
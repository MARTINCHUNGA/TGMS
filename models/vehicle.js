'use strict';

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const vehicle = connection.define('vehicle',{
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
  timestamps : true
});

module.exports = vehicle



// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Vehicle extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Vehicle.init({
//     vehicleType: DataTypes.STRING,
//     price: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Vehicle',
//   });
//   return Vehicle;
// };
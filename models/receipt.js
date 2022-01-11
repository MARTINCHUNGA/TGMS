'use strict';

const {
  DataTypes
} = require('sequelize');
const connection = require("../dbconnection")

const receipt = connection.define('receipt',{
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
  District:{
    type: DataTypes.STRING,
    allowNull:false
  },
  timestamps : true
});

module.exports = receipt


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Receipt extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Receipt.init({
//     vehicleType: DataTypes.STRING,
//     price: DataTypes.STRING,
//     tollName: DataTypes.STRING,
//     District: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Receipt',
//   });
//   return Receipt;
// };


const { Sequelize } = require("sequelize")
require('dotenv').config()

const connection =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASSWORD, {
    host : 'localhost',
    dialect : 'postgres',
    pool:{
        idle:1000,
        max:40,
        min:1,
        acquire:3000
    }
});


// connection.sync({force: true})
module.exports = connection
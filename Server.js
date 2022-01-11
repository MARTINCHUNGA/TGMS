
const express = require('express')
const app = express()
const {sequelize} = require('./models')


const db = require("./models")
db.sequelize.sync()



app.listen(process.env.port || 3001, () => {
    console.log("Server running on port 3001")
})
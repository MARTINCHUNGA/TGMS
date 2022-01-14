
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const {
    Fair,
    Receipt,
    Toll,
    TollBooking,
    User,
    Vehicle
 } = require('./sequelize')

 
app.use(bodyParser.json())

// const {sequelize} = require('./models')
// const logger = require('morgan')
//const index = require('./routes/index')
// app.use(logger('common'))
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended : false}))
// app.use(bodyParser.json())
//app.use(express.urlencoded({extended: true}))




// const db = require("./models")

// db.sequelize.sync()

// app.use('/api/toll', index);
// app.use('/api/user', index)



const port = 3000
app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})
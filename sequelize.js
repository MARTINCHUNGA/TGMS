const { Sequelize } = require("sequelize")
// import all models here
const FairModel = require('./models/fair')
const ReceiptModel = require('./models/receipt')
const TollModel = require('./models/toll')
const TollBookingModel = require('./models/tollbooking')
const UserModel = require('./models/user')
const VehicleModel = require('./models/vehicle')

const sequelize = new Sequelize("TGMS", "postgres", "fact2022", {
    host : 'localhost',
    dialect : 'postgres',
    pool: {
         max : 10,
         min : 0,
         acquire : 30000,
         idle : 10000

    }
})

// inistantiate models by passing sequelize instance and the Library
// creating the models
const Fair = FairModel(sequelize, Sequelize)
const Receipt = ReceiptModel(sequelize,Sequelize)
const Toll = TollModel(sequelize, Sequelize)
const TollBooking = TollBookingModel(sequelize,Sequelize)
const User = UserModel(sequelize, Sequelize)
const Vehicle = VehicleModel(sequelize, Sequelize)

//create the relationships
const UserBooking = sequelize.define('user_tollbooking', {})
 User.belongsToMany(TollBooking, { through : UserBooking, unique : false})
 TollBooking.belongsToMany(User, { through : UserBooking, unique: false})
 Toll.hasMany(TollBooking)



//This will create all the tables in the TGMS database
sequelize.sync({ force : true})
     .then(() => {
         console.log("Database and Tables created")
     })


// export all models here

module.exports = {
    Fair,
    Receipt,
    Toll,
    TollBooking,
    User,
    Vehicle

}

















// require('dotenv').config()

// const sequelize = new Sequelize('postgres://root:fact2022@localhost:5432/TGMS')
// const connection =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, "fact2022", {
//     dialect : 'postgres',
//     pool:{
//         idle:1000,
//         max:40,
//         min:1,
//         acquire:3000,
//     }
// });


//  sequelize.sync({force: true})
// module.exports = sequelize
var express = require('express');
var router = express.Router();
const tollController = require("../controllers/tollController")
const userController = require('../controllers/userController')



//add routes for Toll Controller
// router.get('/', tollController.list)
// router.get('/:id', tollController.getById)
router.post('/addtoll', tollController.add_toll)
// router.put('/api/toll/:id', tollController.update)
// router.delete('/api/toll/:id', tollController.delete)

// add user route here
router.post('/adduser', userController.add_user)



module.exports = router;

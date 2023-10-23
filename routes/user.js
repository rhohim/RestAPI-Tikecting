const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/') 
    .post(userController.getLogin)

module.exports = router
const express = require('express')
const router = express.Router();


const { login_post } = require('../controllers/login_controllers.js')
const { signup_post } = require('../controllers/signup_controllers.js')
const { home_post } = require('../controllers/home_controller.js')
const { activities_post } = require('../controllers/activities_controller')



router.route('/login').post(login_post)
router.route('/signup').post(signup_post)
router.route('/home').post(home_post)
router.route('/activities').post(activities_post)

module.exports = { router }
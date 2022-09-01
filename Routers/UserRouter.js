const checkAdmin = require('../Middlewares/CheckAdmin')
const getUsers = require('./RouterFuntions/UserFunctions/getUsers')
const signin = require('./RouterFuntions/UserFunctions/signIn')
const signup = require('./RouterFuntions/UserFunctions/signUp')


const router = require('express').Router()

router.get('/', checkAdmin, getUsers)
router.post('/signin', signin)
router.post('/signup', signup)

module.exports = router

const checkAdmin = require('../Middlewares/CheckAdmin')
const getUsers = require('./RouterFuntions/getUsers')
const signIn = require('./RouterFuntions/signIn')
const signUp = require('./RouterFuntions/signUp')

const router = require('express').Router()


router.get('/', checkAdmin, getUsers)
router.post('/signin', signIn)
router.post('/signup', signUp)

module.exports = router
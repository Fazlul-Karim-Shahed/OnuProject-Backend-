const { createPayment } = require('./RouterFuntions/PaymentFunctions/createPayment')


const router = require('express').Router()

router.post('/create', createPayment)

module.exports = router
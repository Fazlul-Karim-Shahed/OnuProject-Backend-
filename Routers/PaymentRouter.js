const { createPayment } = require('./RouterFuntions/PaymentFunctions/createPayment')
const { ipn } = require('./RouterFuntions/PaymentFunctions/ipn')


const router = require('express').Router()

router.post('/create', createPayment)
router.post('/ipn', ipn)

module.exports = router
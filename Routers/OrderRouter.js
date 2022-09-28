const { getOrders } = require('./RouterFuntions/OrderFunctions/getOrder')

const router = require('express').Router()

router.get('/', getOrders)




module.exports = router
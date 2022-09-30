const { cancelOrder } = require('./RouterFuntions/OrderFunctions/cancelOrder')
const { getOrders } = require('./RouterFuntions/OrderFunctions/getOrder')
const { getOrdersById } = require('./RouterFuntions/OrderFunctions/getOrdersById')
const { updateOrderStatus } = require('./RouterFuntions/OrderFunctions/updateOrderStatus')

const router = require('express').Router()

router.get('/', getOrders)
router.delete('/:id', cancelOrder)
router.get('/:id', getOrdersById)
router.put('/:id', updateOrderStatus)




module.exports = router

const { createCart } = require('./RouterFuntions/CartFunctions/createCart')
const { deleteCartById } = require('./RouterFuntions/CartFunctions/deleteCart')
const { getCartById } = require('./RouterFuntions/CartFunctions/getCartById')
const { updateCart } = require('./RouterFuntions/CartFunctions/updateCart')

const router = require('express').Router()

router.post('/', createCart)
router.get('/:id', getCartById)
router.put('/', updateCart)
router.delete('/:id', deleteCartById)


module.exports = router
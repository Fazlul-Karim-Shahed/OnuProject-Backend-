const { createProductProperties } = require('./RouterFuntions/ProductPropertiesFunctions/createProductProperties')
const deleteProductProperties = require('./RouterFuntions/ProductPropertiesFunctions/deleteProductProperties')
const getProductProperties = require('./RouterFuntions/ProductPropertiesFunctions/getProductProperties')

const router = require('express').Router()

// Finishing router
router.post('/', createProductProperties)
router.get('/:id', getProductProperties)
router.delete('/', deleteProductProperties)


module.exports = router
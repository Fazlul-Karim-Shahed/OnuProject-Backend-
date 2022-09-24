const { createProductProperties } = require('./RouterFuntions/ProductPropertiesFunctions/createProductProperties')
const deleteProductProperties = require('./RouterFuntions/ProductPropertiesFunctions/deleteProductProperties')
const getAllProductProperties = require('./RouterFuntions/ProductPropertiesFunctions/getAllProductProperties')
const getProductProperties = require('./RouterFuntions/ProductPropertiesFunctions/getProductProperties')

const router = require('express').Router()

// Finishing router
router.get('/', getAllProductProperties)
router.get('/:id', getProductProperties)
router.post('/', createProductProperties)
router.delete('/:id', deleteProductProperties)


module.exports = router
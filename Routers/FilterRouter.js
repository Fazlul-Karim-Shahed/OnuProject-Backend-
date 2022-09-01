const { createFinishing } = require('./RouterFuntions/FilterFunctions/createFinishing')
const { createFinishingColor } = require('./RouterFuntions/FilterFunctions/createFinishingColor')
const { createSize } = require('./RouterFuntions/FilterFunctions/createSize')

const router = require('express').Router()

// Finishing router
router.post('/finishing/:productId', createFinishing)


//Finishing Color router
router.post('/finishing-color/:productId', createFinishingColor)


//Size router
router.post('/size/:productId', createSize)


module.exports = router
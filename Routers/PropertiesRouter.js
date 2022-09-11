const { createFinishing } = require('./RouterFuntions/PropertiesFunctions/createFinishing')
const { createFinishingColor } = require('./RouterFuntions/PropertiesFunctions/createFinishingColor')
const { createSize } = require('./RouterFuntions/PropertiesFunctions/createSize')

const router = require('express').Router()

// Finishing router
router.get('/finishing')
router.post('/finishing/create', createFinishing)


//Finishing Color router
router.post('/finishing-color/create', createFinishingColor)


//Size router
router.post('/size/:create', createSize)


module.exports = router
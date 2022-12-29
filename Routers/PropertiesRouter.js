const { createFinishing } = require('./RouterFuntions/PropertiesFunctions/Finishing/createFinishing')
const { getFinishing } = require('./RouterFuntions/PropertiesFunctions/Finishing/getFinishing')
const { createFinishingColor } = require('./RouterFuntions/PropertiesFunctions/FinishingColor/createFinishingColor')
const { getFinishingColor } = require('./RouterFuntions/PropertiesFunctions/FinishingColor/getFinishingColor')
const { getAllProperties } = require('./RouterFuntions/PropertiesFunctions/getAllProperties')
const { getAllPropertiesById } = require('./RouterFuntions/PropertiesFunctions/getAllPropertiesById')
const { createPartsInfo } = require('./RouterFuntions/PropertiesFunctions/PartsInfo/createPartsInfo')
const { getPartsInfo } = require('./RouterFuntions/PropertiesFunctions/PartsInfo/getPartsInfo')
const { createSize } = require('./RouterFuntions/PropertiesFunctions/Size/createSize')
const { getSize } = require('./RouterFuntions/PropertiesFunctions/Size/getSize')

const router = require('express').Router()

// All properties

router.get('/all-properties/:id', getAllPropertiesById)
router.get('/all-properties/', getAllProperties)

// Finishing router
router.get('/finishing/:id', getFinishing)
router.post('/finishing/create', createFinishing)


//Finishing Color router
router.get('/finishing-color/:id', getFinishingColor)
router.post('/finishing-color/create', createFinishingColor)


//Size router
router.get('/size/:id', getSize)
router.post('/size/create', createSize)


//Parts info router
router.get('/parts-info/:id', getPartsInfo)
router.post('/parts-info/create', createPartsInfo)


module.exports = router
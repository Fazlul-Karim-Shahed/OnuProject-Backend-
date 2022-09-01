const { createCatalog } = require('./RouterFuntions/CatalogFunctions/createCatalog')
const { deleteCatalog } = require('./RouterFuntions/CatalogFunctions/deleteCatalog')
const { getCatalog } = require('./RouterFuntions/CatalogFunctions/getCatalog')
const { updateCatalog } = require('./RouterFuntions/CatalogFunctions/updateCatalog')

const router = require('express').Router()


router.post('/create', createCatalog )
router.get('/', getCatalog)
router.put('/update/:id', updateCatalog)
router.delete('/delete/:id', deleteCatalog)


module.exports = router
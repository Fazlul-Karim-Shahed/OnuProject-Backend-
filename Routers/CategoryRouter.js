const createCategory = require('./RouterFuntions/CategoryFunctions/createCategory')
const { deleteCategory } = require('./RouterFuntions/CategoryFunctions/deleteCategory')
const { getCategoryByCatalog } = require('./RouterFuntions/CategoryFunctions/getByCatalog')
const { getCategory } = require('./RouterFuntions/CategoryFunctions/getCategory')
const { updateCategory } = require('./RouterFuntions/CategoryFunctions/updateCategory')


const router = require('express').Router()


router.post('/create', createCategory)
router.get('/', getCategory)
router.delete('/delete/:id', deleteCategory)
router.put('/update', updateCategory)
router.get('/catalog-id/:catalog', getCategoryByCatalog)


module.exports = router
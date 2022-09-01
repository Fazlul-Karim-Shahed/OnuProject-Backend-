const { createSubCategory } = require('./RouterFuntions/SubCategoryFuntions/createSubCategory')
const { deleteSubCategory } = require('./RouterFuntions/SubCategoryFuntions/deleteSubCategory')
const { filterSubCategory } = require('./RouterFuntions/SubCategoryFuntions/filterSubCategory')
const { getByCatalog } = require('./RouterFuntions/SubCategoryFuntions/getByCatalog')
const { getSubCategory } = require('./RouterFuntions/SubCategoryFuntions/getSubCategory')
const { updateSubCategory } = require('./RouterFuntions/SubCategoryFuntions/updateSubCategory')

const router = require('express').Router()


router.post('/', createSubCategory)
router.get('/', getSubCategory)
router.get('/filter/:catalogId/:categoryId', filterSubCategory )
router.get('/filter/:catalogId', getByCatalog )
router.put('/:id', updateSubCategory)
router.delete('/:id', deleteSubCategory)


module.exports = router
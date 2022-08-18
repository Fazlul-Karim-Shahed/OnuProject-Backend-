const createCategory = require('./RouterFuntions/createCategory')
const { deleteCategory } = require('./RouterFuntions/deleteCategory')

const router = require('express').Router()


router.post('/create', createCategory)
router.delete('/:id', deleteCategory )


module.exports = router
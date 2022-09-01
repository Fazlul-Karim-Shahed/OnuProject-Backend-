const createProduct = require('./RouterFuntions/ProductFunctions/createProduct');
const getOneProduct = require('./RouterFuntions/ProductFunctions/getOneProduct');


const router = require('express').Router()



router.get('/:id', getOneProduct)
router.post('/create', createProduct)
router.put('/:id', )

module.exports = router
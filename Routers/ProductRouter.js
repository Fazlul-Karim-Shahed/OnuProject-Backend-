const createProduct = require('./RouterFuntions/ProductFunctions/createProduct');
const getOneProduct = require('./RouterFuntions/ProductFunctions/getOneProduct');
const getAllProducts = require('./RouterFuntions/ProductFunctions/getProducts');


const router = require('express').Router()



router.get('/:id', getOneProduct)
router.post('/create', createProduct)
router.get('/', getAllProducts)

module.exports = router
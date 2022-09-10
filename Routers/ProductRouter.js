const createProduct = require('./RouterFuntions/ProductFunctions/createProduct');
const getOneProduct = require('./RouterFuntions/ProductFunctions/getOneProduct');
const getAllProducts = require('./RouterFuntions/ProductFunctions/getProducts');
const updateProduct = require('./RouterFuntions/ProductFunctions/updateProduct');


const router = require('express').Router()



router.get('/product-details/:id', getOneProduct)
router.post('/create', createProduct)
router.get('/', getAllProducts)
router.put('/:id', updateProduct)

module.exports = router
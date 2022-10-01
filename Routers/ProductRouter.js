const createProduct = require('./RouterFuntions/ProductFunctions/createProduct');
const { deleteProduct } = require('./RouterFuntions/ProductFunctions/deleteProduct');
const getOneProduct = require('./RouterFuntions/ProductFunctions/getOneProduct');
const { getPhoto } = require('./RouterFuntions/ProductFunctions/getPhoto');
const getAllProducts = require('./RouterFuntions/ProductFunctions/getProducts');
const updateProduct = require('./RouterFuntions/ProductFunctions/updateProduct');


const router = require('express').Router()



router.get('/product-details/:id', getOneProduct)
router.post('/create', createProduct)
router.get('/', getAllProducts)
router.put('/:id', updateProduct)
router.get('/:id/:index', getPhoto)
router.delete('/:id', deleteProduct)

module.exports = router
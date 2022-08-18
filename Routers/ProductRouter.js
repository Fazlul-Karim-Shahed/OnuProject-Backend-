const createProduct = require('./RouterFuntions/createProduct');
const getOneProduct = require('./RouterFuntions/getOneProduct');


const router = require('express').Router()



router.get('/:id', getOneProduct)
router.post('/create', createProduct)

module.exports = router
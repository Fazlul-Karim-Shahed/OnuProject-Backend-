
const { Products } = require('../../../Models/ProductModel')

const getAllProducts = async (req, res) => {
    
    const product = await Products.find().populate(['categoryId', 'subCategoryId', 'catalogId'])
    res.send({ message: 'Product found', error: false, value: product });
}

module.exports = getAllProducts
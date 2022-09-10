
const { Products } = require('../../../Models/ProductModel')
const { mongoose } = require('mongoose')
const _ = require('lodash')

const updateProduct = async (req, res) => {

    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        const product = await Products.findOne({ _id: id }).populate(['categoryId', 'subCategoryId', 'catalogId'])
        console.log(req.body);
        let obj = _.pick(req.body, ['name', 'categoryId', 'price', 'description', 'quantity', 'discount', 'catalogId', 'subCategoryId'])


    }
    else {
        res.send({ message: 'Product id not valid', error: true })
    }
}

module.exports = updateProduct
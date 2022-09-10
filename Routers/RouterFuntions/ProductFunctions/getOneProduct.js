
const { default: mongoose } = require('mongoose')
const { Products } = require('../../../Models/ProductModel')

const getOneProduct = async (req, res) => {
    const id = req.params.id
    console.log(id);
    if(mongoose.Types.ObjectId.isValid(id)){
        
        const product = await Products.findOne({ _id: String(id) }).populate(['categoryId', 'subCategoryId', 'catalogId'])

        if (product) return res.send({ message: 'Product found', error: false, value: product });
        else return res.send({ message: 'Product not found', error: true })
    }
    else{
        res.send({ message: 'Product id not valid', error: true })
    }
}

module.exports = getOneProduct
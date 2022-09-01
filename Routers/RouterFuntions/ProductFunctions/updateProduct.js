
const { Products } = require('../../../Models/ProductModel')

const updateProduct = async (req, res) => {
    const id = req.params.id
    const product = await Products.findOne({ _id: id }).populate('category', 'subCategory')

    if (product) return res.send({ message: 'Product found', error: false, value: product });
    else return res.send({ message: 'Product not found', error: true })
}

module.exports = updateProduct
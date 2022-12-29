
const { Products } = require('../../../Models/ProductModel')
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')

const deleteProduct = async (req, res) => {

    const id = req.params.id;

    const product = await Products.deleteOne({ _id: id })
    const property = await ProductProperties.deleteMany({ productId: id })

    return res.status(200).send({
        message: 'Product deleted successfully', error: false, value: {
            product: product,
            property: property
        }
    });
}

module.exports.deleteProduct = deleteProduct
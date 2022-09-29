
const { Products } = require('../../../Models/ProductModel')

const getPhoto = async (req, res) => {

    const productId = req.params.id;
    const index = req.params.index
    const product = await Products.findById(productId).select({ photo: 1, _id: 0 })

    res.set('Content-Type', product.photo.contentType);
    return res.status(200).send(product.photo[index].data);
}

module.exports.getPhoto = getPhoto
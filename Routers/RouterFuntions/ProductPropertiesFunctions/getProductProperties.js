
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')

const getProductProperties = async (req, res) => {
    const id = req.params.id

    const productProperties = await ProductProperties.find({ productId: id }).populate(['finishingId', 'finishingColorId', 'sizeId', 'partsInfoId', 'productId'])

    if (productProperties.length!=0) return res.send({ message: 'Properties found', error: false, value: productProperties });

    else return res.send({ message: 'Properties not found', error: true })
}

module.exports = getProductProperties

const { ProductProperties } = require('../../../Models/ProductPropertiesModel')
const _ = require('lodash')

const deleteProductProperties = async (req, res) => {

    const productProperties = await ProductProperties.deleteOne(_.pick(req.body, ['productId', 'sizeId', 'finishingId', 'finishingColorId', 'partsInfoId']))

    res.send({ message: 'Deleted Successfully', error: false, value: productProperties })
}

module.exports = deleteProductProperties
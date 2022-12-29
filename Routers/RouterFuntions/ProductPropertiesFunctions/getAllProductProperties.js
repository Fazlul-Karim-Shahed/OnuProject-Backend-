
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')

const getAllProductProperties = async (req, res) => {
    
    const id = req.params.id
    const productProperties = await ProductProperties.find().populate(['finishingId', 'finishingColorId', 'sizeId', 'partsInfoId'])

    if (productProperties.length != 0) return res.send({ message: 'All Properties', error: false, value: productProperties });

    else return res.send({ message: 'All Properties not found', error: true })
}

module.exports = getAllProductProperties
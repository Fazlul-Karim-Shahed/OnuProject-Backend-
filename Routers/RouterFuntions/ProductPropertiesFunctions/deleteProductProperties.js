
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')
const _ = require('lodash')

const deleteProductProperties = async (req, res) => {

    const productProperties = await ProductProperties.deleteOne({ _id: req.params.id })
    console.log(productProperties);

    res.send({ message: 'Deleted Successfully', error: false, value: productProperties })
}

module.exports = deleteProductProperties
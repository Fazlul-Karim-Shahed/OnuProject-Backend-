
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')

const getProductPropertiesPhoto = async (req, res) => {

    const id = req.params.id;
    const index = req.params.index
    const property = await ProductProperties.findById(id).select({ photo: 1, _id: 0 })
    res.set('Content-Type', property.photo.contentType);
    return res.status(200).send(property.photo[index].data);
}


module.exports.getProductPropertiesPhoto = getProductPropertiesPhoto
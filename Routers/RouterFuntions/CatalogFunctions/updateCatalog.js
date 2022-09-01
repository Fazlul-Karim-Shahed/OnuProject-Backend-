
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')


const updateCatalog = async (req, res) => {

    const catalog = await Catalog.updateOne({ _id: req.params.id }, { name: req.body.name })
    res.send({ message: 'Updated successfully', error: false, value: catalog })

}  

module.exports.updateCatalog = updateCatalog
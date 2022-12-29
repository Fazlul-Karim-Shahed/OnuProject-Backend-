
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')


const getCatalog = async (req, res) => {

    const catalog = await Catalog.find()
    res.send({ message: 'All catalogs', error: false, value: catalog })

}

module.exports.getCatalog = getCatalog
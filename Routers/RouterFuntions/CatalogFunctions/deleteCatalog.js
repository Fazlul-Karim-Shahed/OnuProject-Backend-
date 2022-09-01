
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')
const { Categories } = require("../../../Models/CategoryModel")


const deleteCatalog = async (req, res) => {

    const catalog = await Catalog.deleteOne({ _id: req.params.id })
    const category = await Categories.deleteMany({ catalogId: req.params.id })
    console.log(catalog);

    res.send({ message: 'Deleted catalogs', error: false, value: [catalog, category] })

}

module.exports.deleteCatalog = deleteCatalog
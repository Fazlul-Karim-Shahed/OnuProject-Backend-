
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')
const { Categories } = require("../../../Models/CategoryModel")
const { SubCategories } = require("../../../Models/SubCategoryModel")
const { Products } = require("../../../Models/ProductModel")


const deleteCatalog = async (req, res) => {

    const catalog = await Catalog.deleteOne({ _id: req.params.id })
    const category = await Categories.deleteMany({ catalogId: req.params.id })
    const subCategory = await SubCategories.deleteMany({ catalogId: req.params.id })
    const products = await Products.deleteMany({ catalogId: req.params.id })


    res.send({ message: 'Deleted catalogs', error: false, value: [catalog, category, subCategory, products] })

}

module.exports.deleteCatalog = deleteCatalog
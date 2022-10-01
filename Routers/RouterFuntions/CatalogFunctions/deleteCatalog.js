
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')
const { Categories } = require("../../../Models/CategoryModel")
const { SubCategories } = require("../../../Models/SubCategoryModel")
const { Products } = require("../../../Models/ProductModel")


const deleteCatalog = async (req, res) => {

    const id  = req.params.id
    const catalog = await Catalog.deleteOne({ _id: id })
    const category = await Categories.deleteMany({ catalogId: id })
    const subCategory = await SubCategories.deleteMany({ catalogId: id })
    const products = await Products.deleteMany({ catalogId: id })

    console.log([catalog, category, subCategory, products]);

    res.send({ message: 'Deleted catalogs', error: false, value: [catalog, category, subCategory, products] })

}

module.exports.deleteCatalog = deleteCatalog
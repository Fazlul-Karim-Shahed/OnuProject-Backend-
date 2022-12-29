
const { Categories } = require('../../../Models/CategoryModel');
const { SubCategories } = require("../../../Models/SubCategoryModel")
const { Products } = require("../../../Models/ProductModel")

const deleteCategory = async (req, res) => {

    const id = req.params.id
    const category = await Categories.deleteOne({ _id: id })
    const subCategory = await SubCategories.deleteMany({ categoryId: id })
    const products = await Products.deleteMany({ categoryId: id })

    res.send({ message: 'deleted successfully', error: true, value: [category, subCategory, products] })
}

module.exports.deleteCategory = deleteCategory
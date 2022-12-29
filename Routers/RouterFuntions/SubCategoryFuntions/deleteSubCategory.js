
const { SubCategories } = require('../../../Models/SubCategoryModel')
const { Products } = require("../../../Models/ProductModel")

const deleteSubCategory = async (req, res) => {

    const id = req.params.id
    const data = await SubCategories.deleteOne({ _id: id });
    const products = await Products.deleteMany({ subCategoryId: id })

    console.log([data, products]);
    return res.send({ message: 'Subcategory successfully deleted', error: false, value: [data, products] })


}
module.exports.deleteSubCategory = deleteSubCategory
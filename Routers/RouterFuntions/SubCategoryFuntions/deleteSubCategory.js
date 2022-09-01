const { SubCategories } = require('../../../Models/SubCategoryModel')

const deleteSubCategory = async (req, res) => {
 
    let data = await SubCategories.deleteOne({ _id: req.params.id });
    return res.send({ message: 'Subcategory successfully deleted', error: false, value: data })


}
module.exports.deleteSubCategory = deleteSubCategory
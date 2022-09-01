
const { SubCategories } = require('../../../Models/SubCategoryModel')

const filterSubCategory = async (req, res) => {

    // console.log('hi');
    const catalogId = req.params.catalogId
    const category = req.params.categoryId
    const subcategory = await SubCategories.find({ catalogId: catalogId, categoryId: category }).populate(['catalogId', 'categoryId'])
    res.send({ message: 'Successful', error: false, value: subcategory })

}
module.exports.filterSubCategory = filterSubCategory
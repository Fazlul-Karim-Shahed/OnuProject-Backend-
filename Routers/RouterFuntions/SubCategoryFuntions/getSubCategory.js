const { SubCategories } = require('../../../Models/SubCategoryModel')

const getSubCategory = async (req, res) => {

    // console.log('hi');
    const subcategory = await SubCategories.find().populate(['catalogId', 'categoryId'])
    res.send({ message: 'Successful', error: false, value: subcategory })

}
module.exports.getSubCategory = getSubCategory
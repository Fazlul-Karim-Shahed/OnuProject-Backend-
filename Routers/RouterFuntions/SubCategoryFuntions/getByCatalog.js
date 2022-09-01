const { SubCategories } = require('../../../Models/SubCategoryModel')

const getByCatalog = async (req, res) => {

    // console.log('hi');
    const subcategory = await SubCategories.find({ catalogId: req.params.catalogId }).populate(['catalogId', 'categoryId'])
    res.send({ message: 'Successful', error: false, value: subcategory })

}
module.exports.getByCatalog = getByCatalog
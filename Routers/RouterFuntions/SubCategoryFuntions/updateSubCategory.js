const { SubCategories } = require('../../../Models/SubCategoryModel')

const updateSubCategory = async (req, res) => {
    // console.log(req.body);

    const subcategory = await SubCategories.findOne({ name: req.body.name, categoryId: req.body.categoryId, catalogId: req.body.catalogId })
    console.log(subcategory);

    if (subcategory) return res.send({ message: 'Already exist', error: true })
    else {
        let data = await SubCategories.updateOne({ _id: req.params.id }, { name: req.body.name, categoryId: req.body.categoryId, catalogId: req.body.catalogId })
        console.log(data);
        return res.send({ message: 'Subcategory successfully updated', error: false, value: data })
    }

    // res.send({ message: 'Successful', error: false, value: subcategory })

}
module.exports.updateSubCategory = updateSubCategory
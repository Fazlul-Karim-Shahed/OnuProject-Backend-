const { SubCategories } = require('../../../Models/SubCategoryModel')
const _ = require('lodash')

const createSubCategory = async (req, res) => {

    const subcategory = await SubCategories.findOne(_.pick(req.body, ['name', 'catalogId', 'categoryId']))
    console.log(subcategory);
    if (!subcategory) {
        let data = new SubCategories(_.pick(req.body, ['name', 'catalogId', 'categoryId']))

        data = await data.save()
        res.send({ message: 'Subcategory created successfully', error: false, value: data })
    }

    else return res.send({ message: 'Already exist', error: true })

}
module.exports.createSubCategory = createSubCategory
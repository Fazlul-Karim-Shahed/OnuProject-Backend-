

const { Categories } = require('../../../Models/CategoryModel');

const getCategory = async (req, res) => {

    const category = await Categories.find().populate('catalogId').sort({ name: 1, catalogId : 1 })
    res.send({ message: 'All category', error: false, value: category })
}

module.exports.getCategory = getCategory
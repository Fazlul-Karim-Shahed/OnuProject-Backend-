

const { default: mongoose } = require('mongoose');
const { Categories } = require('../../../Models/CategoryModel');

const getCategoryByCatalog = async (req, res) => {

    // console.log(req.params);


    const category = await Categories.find({ catalogId: req.params.catalog })
        .populate('catalogId').sort({ name: 1, catalogId: 1 })

    // console.log(category);
    res.send({ message: 'All category', error: false, value: category })
}

module.exports.getCategoryByCatalog = getCategoryByCatalog
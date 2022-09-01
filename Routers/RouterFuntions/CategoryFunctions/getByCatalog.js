

const { Categories } = require('../../../Models/CategoryModel');

const getCategoryByCatalog = async (req, res) => {
    console.log(req.params.catalogId);

    const category = await Categories.find(req.params.catalogId === 'select catalog' ? { name: '' } : { catalogId: req.params.catalogId })
        .populate('catalogId').sort({ name: 1, catalogId: 1 })
    if (category.length === 0) return res.send({ message: 'Not found', error: true })

    res.send({ message: 'All category', error: false, value: category })
}

module.exports.getCategoryByCatalog = getCategoryByCatalog
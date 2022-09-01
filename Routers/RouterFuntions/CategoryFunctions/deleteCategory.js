
const { Categories } = require('../../../Models/CategoryModel');

const deleteCategory = async (req, res) => {
    console.log(req.body);
    const id = req.params.id
    const category = await Categories.deleteOne({ _id: id })

    res.send({ message: 'deleted successfully', error: true, value: category })
}

module.exports.deleteCategory = deleteCategory
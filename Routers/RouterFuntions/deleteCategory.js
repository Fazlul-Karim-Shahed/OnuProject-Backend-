
const {Categories} = require('../../Models/CategoryModel');

const deleteCategory = async(req, res) => {
    
    const id = req.params.id
    const category = await Categories.deleteOne({_id : id})

    res.rend({message: 'deleted successfully', error: true, value: category})
}

module.exports.deleteCategory = deleteCategory
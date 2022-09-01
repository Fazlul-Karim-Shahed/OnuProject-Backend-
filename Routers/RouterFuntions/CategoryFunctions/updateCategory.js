
const { Categories } = require('../../../Models/CategoryModel');

const updateCategory = async (req, res) => {

    console.log(req.body);

    const id = req.body.id
    const data = await Categories.findOne({ name: req.body.name, catalogId: req.body.catalogId })
    console.log(data);
    if (data) {
        return res.send({ message: 'Already exist', error: true })

    }
    else {
        const category = await Categories.updateOne({ _id: id }, { catalogId: req.body.catalogId, name: req.body.name })
        res.send({ message: 'Updated successfully', error: false, value: category })
    }



}

module.exports.updateCategory = updateCategory
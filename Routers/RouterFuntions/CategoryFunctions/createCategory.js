const { Categories } = require('../../../Models/CategoryModel')

const createCategory = async (req, res) => {

    const category = await Categories.findOne({ name: req.body.name, catalogId: req.body.catalogId })

    if (!category) {
        let data = new Categories({ name: req.body.name, catalogId: req.body.catalogId })
        data = await data.save()
        res.send({ message: 'Category created successfully', error: false, value: data })
    }

    else return res.send({ message: 'Category already exist', error: true })

}

module.exports = createCategory
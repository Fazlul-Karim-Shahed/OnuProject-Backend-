
const { Catalog } = require("../../../Models/CatalogModel")
const _ = require('lodash')


const createCatalog = async (req, res) => {

    const catalog = await Catalog.findOne({ name: req.body.name })

    if (catalog) return res.send({ message: 'This named catalog already exists', error: true });
    let data = new Catalog(_.pick(req.body, ['name']))
    data = data.save()
    res.send({ message: 'Catalog created successfully', error: false, value: data })
}

module.exports.createCatalog = createCatalog
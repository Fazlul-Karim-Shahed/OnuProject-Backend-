
const { ProductProperties } = require('../../../Models/ProductPropertiesModel')
const _ = require('lodash')
const formidable = require('formidable')
const fs = require('fs')

const createProductProperties = async (req, res) => {

    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {

        ProductProperties.findOne({ $and: [{ productId: fields.productId }, { finishingId: fields.finishingId }, { finishingColorId: fields.finishingColorId }, { sizeId: fields.sizeId }, { partsInfoId: fields.partsInfoId }] }, (err, result) => {

            if (result) return res.send({ message: 'Already exists', error: true })

            if (err) return res.send({ message: 'Form error', error: true })

            if (Object.keys(files).length === 0) return res.send({ message: 'Add at least one photo', error: true })

            let photo = []
            for (var i in files) {
                let p = new Promise(resolve => {
                    fs.readFile(files[i].filepath, (err, data) => {
                        resolve({
                            data: data,
                            contentType: files[i].mimetype
                        })
                    })
                })
                photo.push(p)
            }

            Promise.all(photo).then(photo => {

                let obj = _.pick(fields, ['productId', 'sizeId', 'finishingId', 'finishingColorId', 'partsInfoId'])

                obj.photo = photo



                let data = new ProductProperties(obj)
                data.save((err, result) => {
                    if (err) return res.send({ message: 'Data saving error', error: true })

                    res.send({ message: 'Properties created successfully', error: false, value: result })
                })

            })
        })




    })




}

module.exports.createProductProperties = createProductProperties
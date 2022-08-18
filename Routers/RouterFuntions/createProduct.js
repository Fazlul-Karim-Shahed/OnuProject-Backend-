
const formidable = require('formidable')
const fs = require('fs')
const { Products } = require('../../Models/ProductModel')
const _ = require('lodash')

const createProduct = async (req, res) => {

    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.send({ message: 'File upload failed', error: true })
        }
        else {
            console.log(fields);
            let product = new Products(_.pick(fields, ['name', 'category', 'price', 'description', 'quantity', 'updatedPrice']))
            if (files) {

                if (files.photo && (files.photo.size / 1024) <= 1024) {
                    fs.readFile(files.photo.filepath, (err, data) => {

                        if (err) return res.send({ message: 'Reading file failed', error: true });

                        product.photo.data = data
                        product.photo.contentType = files.photo.mimetype

                        product.save((error, result) => {
                            if (error) {
                                console.log(error);
                                res.send({ message: 'Saving photo failed', error: true })
                            }
                            else return res.send({
                                message: 'Product created successfully',
                                value: result,
                                error: false
                            })
                        })

                    })
                }
                else {
                    res.send({ message: 'Photo must be less than 1024 Kb', error: true })
                }

            }
        }


    })


}


module.exports = createProduct
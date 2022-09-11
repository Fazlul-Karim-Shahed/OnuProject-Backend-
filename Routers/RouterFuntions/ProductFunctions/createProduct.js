
const formidable = require('formidable')
const fs = require('fs')
const { Products } = require('../../../Models/ProductModel')
const _ = require('lodash')


const createProduct = async (req, res) => {

    // console.log(req);
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        // console.log(fields, files);
        if (err) {

            res.send({ message: 'File upload failed', error: true })
        }
        else {
            
            let product = new Products(_.pick(fields, ['name', 'categoryId', 'price', 'description', 'quantity', 'discount', 'catalogId', 'subCategoryId']))

            if (files && Object.keys(files).length !== 0) {

                product.photo = []
                let obj = {}
                let arr = []
                for (var i in files) {

                    console.log(files[i].filepath);
                    let p = new Promise(resolve => {
                        fs.readFile(files[i].filepath, (err, data) => {
                            resolve({
                                ...obj,
                                data: data,
                                contentType: files[i].mimetype
                            })
                        })
                    })

                    arr.push(p)


                }

                Promise.all(arr).then(arr => {

                    product.photo = [...arr]

                    product.save((err, result) => {
                        if (err) res.send({ message: 'Product creation failed', error: true });
                        else {
                            res.send({ message: 'Product created successfully', error: false, value: result });
                        }
                    })
                })

            }
            else {
                res.send({ message: 'Product creation failed. Please add photo', error: true });

            }


        }


    })


}


module.exports = createProduct
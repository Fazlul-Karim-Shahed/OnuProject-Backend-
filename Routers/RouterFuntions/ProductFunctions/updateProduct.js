
const { Products } = require('../../../Models/ProductModel')
const { mongoose } = require('mongoose')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const formidable = require('formidable')

const updateProduct = async (req, res) => {

    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let product = await Products.findOne({ _id: id })
        let removeId = req.headers.arr.split(',')
        removeId = removeId[0] === '' ? [] : removeId
        console.log(removeId);

        let form = new formidable.IncomingForm()
        form.keepExtensions = true
        form.parse(req, (err, fields, files) => {

            let obj = _.pick(fields, ['name', 'categoryId', 'price', 'description', 'quantity', 'discount', 'catalogId', 'subCategoryId'])


            if (files && Object.keys(files).length !== 0) {

                let arr = []
                for (let i in files) {

                    let p = new Promise(resolve => {
                        fs.readFile(files[i].filepath, (err, data) => {
                            resolve({
                                data: data,
                                contentType: files[i].mimetype
                            })
                        })
                    })
                    arr.push(p)
                }

                Promise.all(arr).then(data => {


                    if (removeId.length === 0) {
                        let newPhotoArr = [...product.photo, ...data]
                        obj.photo = newPhotoArr

                        Products.updateOne({ _id: id }, obj, (err, data) => {
                            console.log('1');
                            res.send({ message: 'Product updated successfully', error: false, value: data })
                        })
                    }
                    else if (product.photo.length === removeId.length) {
                        console.log('2');
                        res.send({ message: 'Product must have one photo', error: true })
                    }
                    else {
                        let newPhotoArr
                        removeId.forEach(item => {
                            product.photo.pull({ _id: item })
                            newPhotoArr = [...product.photo, ...data]
                            obj.photo = newPhotoArr
                        })


                        Products.updateOne({ _id: id }, obj, (err, data) => {
                            console.log('3');
                            res.send({ message: 'Product updated successfully', error: false, value: data })
                        })

                    }

                })

            }

            else {

                if (removeId.length === 0) {
                    Products.updateOne({ _id: id }, obj, (err, data) => {
                        console.log('4: ', obj, err);
                        res.send({ message: 'Product updated successfully', error: false, value: data })
                    })
                }
                else if (product.photo.length === removeId.length) {
                    console.log('5');
                    res.send({ message: 'Product must have one photo', error: true })
                }
                else {
                    let newPhotoArr
                    removeId.forEach(item => {

                        newPhotoArr = [...product.photo.pull({ _id: item })]
                        obj.photo = newPhotoArr
                    })


                    Products.updateOne({ _id: id }, obj, (err, data) => {
                        console.log('6');
                        res.send({ message: 'Product updated successfully', error: false, value: data })
                    })

                }

            }
        })

    }
    else {
        console.log('7');
        res.send({ message: 'Product id not valid', error: true })
    }
}

module.exports = updateProduct
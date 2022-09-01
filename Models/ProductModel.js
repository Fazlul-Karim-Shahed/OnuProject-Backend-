
const { Schema, model } = require('mongoose')

const Products = model('Products', Schema({
    name: {
        type: String,
        required: true
    },
    catalogId: {
        type: Schema.Types.ObjectId,
        ref: 'Catalog',
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'SubCategories',
    },
    price: { type: Number, required: true },
    discount: { type: Number },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    photo: [{
        data: Buffer,
        contentType: String,
    }],

}, { timestamps: true }))

module.exports.Products = Products
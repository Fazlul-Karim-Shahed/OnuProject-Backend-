
const { Schema, model } = require('mongoose')

const Products = model('Products', Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    price: { type: Number, required: true },
    updatedPrice: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    photo: {
        data: Buffer,
        contentType: String,
    }

}, { timestamps: true }))

module.exports.Products = Products
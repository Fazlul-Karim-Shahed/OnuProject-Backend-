const { Schema, model } = require('mongoose')

const Sizes = model('Sizes', Schema({
    size: String,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    additionalPrice: Number,
}))

module.exports.Sizes = Sizes
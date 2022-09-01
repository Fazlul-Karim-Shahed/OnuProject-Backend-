
const {Schema, model} = require('mongoose')

const Finishings = model('Finishings', Schema({
    finishing: String,
    additionalPrice: Number,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }
}))

module.exports.Finishings = Finishings
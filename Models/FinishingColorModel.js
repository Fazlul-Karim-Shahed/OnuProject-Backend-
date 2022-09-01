const { Schema, model } = require('mongoose')

const FinishingColors = model('FinishingColors', Schema({
    finishingColor: String,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    additionalPrice: Number
}))

module.exports.FinishingColors = FinishingColors
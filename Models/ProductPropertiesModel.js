const { Schema, model } = require('mongoose')

const ProductProperties = model('ProductProperties', Schema({

    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    photo: [{
        data: Buffer,
        contentType: String,
    }],
    
    finishingId: {
        type: Schema.Types.ObjectId,
        ref: 'Finishings'
    },
    finishingColorId: {
        type: Schema.Types.ObjectId,
        ref: 'FinishingColors'
    },
    sizeId: {
        type: Schema.Types.ObjectId,
        ref: 'Sizes'
    },
    partsInfoId: {
        type: Schema.Types.ObjectId,
        ref: 'PartsInfos'
    },

}))

module.exports.ProductProperties = ProductProperties
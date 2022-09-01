const { Schema, model } = require('mongoose')

const ProductPhotos = model('ProductPhotos', Schema({
    finishingColor: String,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    photos: [{
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
        ref: 'Size'
    },
    additionalPrice: Number
}))

module.exports.ProductPhotos = ProductPhotos

const { Schema, model } = require('mongoose')


const Carts = model('Carts', Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    quantity: Number,
    finishingId: {
        type: Schema.Types.ObjectId,
        ref: 'Finishings',
        required: true,
    },
    finishingColorId: {
        type: Schema.Types.ObjectId,
        ref: 'FinishingColors',
        required: true,
    },
    sizeId: {
        type: Schema.Types.ObjectId,
        ref: 'Sizes',
        required: true,
    },
    partsInfoId: {
        type: Schema.Types.ObjectId,
        ref: 'PartsInfos',
        required: true,
    },
    price: Number,
    total: Number

}, { timestamps: true }))


module.exports.Carts = Carts

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

}, { timestamps: true }))


module.exports.Carts = Carts
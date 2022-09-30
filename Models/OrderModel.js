const { Schema, model } = require('mongoose')

const Orders = model('Orders', Schema({

    // cartItem: [{ type: Schema.Types.ObjectId, ref: 'Carts' }],
    cartItem: [{ type: Object }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    paymentMethod: String,
    totalAmount: {
        type: String,
    },
    transactionId: {
        type: String,
        unique: true
    },
    profile: {
        customerName: String,
        email: String,
        address: String,
        postCode: String,
        phone: Number,
        city: String
    },
    sessionKey: String,
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending'
    },
    productStatus: {
        type: String,
        enum: ['pending', 'delivered'],
        default: 'pending'
    },

    // after getting ipn
    transactionDate: Date,
    validationId: String,
    storeAmount: Number,
    cardType: String,
    cardNo: String,
    bankTransactionId: String,
    cardIssuer: String,
    cardBrand: String,
    cardIssuerCountryCode: String,
    currencyAmount: Number,
    verifySign: String,
    valueA: String,
    verifyKey: String

}, { timestamps: true }))


module.exports.Orders = Orders
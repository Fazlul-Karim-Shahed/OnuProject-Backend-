const { Schema, model } = require('mongoose')

const PartsInfos = model('PartsInfos', Schema({
    
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    partsInfo: {type: Object} ,
    additionalPrice: Number
}))

module.exports.PartsInfos = PartsInfos
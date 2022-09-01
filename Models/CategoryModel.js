
const { Schema, model } = require('mongoose')

const Categories = model('Categories', Schema({
    name: {
        type: String,
        required: true
    },
    catalogId: {
        type: Schema.Types.ObjectId,
        ref: 'Catalog'
    },
}, { timestamps: true }))

module.exports.Categories = Categories
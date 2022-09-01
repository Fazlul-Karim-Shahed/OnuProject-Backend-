
const { Schema, model } = require('mongoose')

const SubCategories = model('SubCategories', Schema({
    name: {
        type: String,
        unique: true,
    },
    catalogId: {
        type: Schema.Types.ObjectId,
        ref: 'Catalog'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    }
}, { timestamps: true }))

module.exports.SubCategories = SubCategories
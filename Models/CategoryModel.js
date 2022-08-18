
const { Schema, model } = require('mongoose')

const Categories = model('Categories', Schema({
    name: {
        type: String,
        unique: true,
    }
}, { timestamps: true }))

module.exports.Categories = Categories
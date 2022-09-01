
const { Schema, model } = require('mongoose')

const Catalog = model('Catalog', Schema({
    name: {
        type: String,
        unique: true,
    }
}, { timestamps: true }))

module.exports.Catalog = Catalog
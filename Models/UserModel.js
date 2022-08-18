
const { Schema, model } = require('mongoose')

const Users = model('Users', Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String, min: 5, max: 2048 },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true }))

module.exports.Users = Users
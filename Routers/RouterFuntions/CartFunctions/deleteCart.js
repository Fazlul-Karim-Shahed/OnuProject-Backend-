
const { Carts } = require("../../../Models/CartModel")
const _ = require('lodash')


const deleteCartById = async (req, res) => {

    const id = req.params.id
    const cart = await Carts.deleteOne({ _id: id })

    res.send({ message: 'Item deleted', error: false, value: cart })

}

module.exports.deleteCartById = deleteCartById
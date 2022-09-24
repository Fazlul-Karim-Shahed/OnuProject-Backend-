
const { Carts } = require("../../../Models/CartModel")
const _ = require('lodash')


const getCartById = async (req, res) => {

    const id = req.params.id
    const cart = await Carts.find({ userId: id }).populate(['productId', 'finishingId', 'finishingColorId', 'sizeId', 'partsInfoId'])

    if (cart.length === 0) return res.send({ message: 'No item found', error: true })

    res.send({ message: 'All cart item', error: false, value: cart })

}

module.exports.getCartById = getCartById
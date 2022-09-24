
const { Carts } = require("../../../Models/CartModel")
const _ = require('lodash')


const updateCart = async (req, res) => {

    let updatedCart = await Carts.updateOne({ _id: req.body._id }, { quantity: Number(req.body.quantity), total: Number(req.body.total) })

    return res.send({ message: 'Updated successfully', error: true, value: updatedCart });

}

module.exports.updateCart = updateCart
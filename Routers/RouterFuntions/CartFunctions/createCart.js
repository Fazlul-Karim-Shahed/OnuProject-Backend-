
const { Carts } = require("../../../Models/CartModel")
const _ = require('lodash')


const createCart = async (req, res) => {

    let arr = [{ productId: req.body.productId }, { finishingId: req.body.finishingId }, { finishingColorId: req.body.finishingColorId }, { sizeId: req.body.sizeId }, { partsInfoId: req.body.partsInfoId }, { userId: req.body.userId }]

    const cart = await Carts.findOne({ $and: arr })
    if (cart) {
        let updatedCart = await Carts.updateOne({ $and: arr }, { quantity: Number(cart.quantity) + Number(req.body.quantity), total: Number(cart.total) + Number(req.body.total) })

        return res.send({ message: 'Item added to cart successfully', error: true, value: updatedCart });
    }


    let data = new Carts(req.body)

    data = data.save((err, result) => {
        if (err) res.send({ message: 'ISomething went wrong while adding to cart', error: false })

        res.send({ message: 'Item added to cart successfully', error: false, value: result })
    })
    console.log('data: ', data);

}

module.exports.createCart = createCart
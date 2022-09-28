
const { Orders } = require('../../../Models/OrderModel')


const getOrders = async (req, res) => {

    let data = await Orders.find().populate(['cartItem.carts', 'userId'])

    res.send({ message: 'All orders', error: false, value: data })

}


module.exports.getOrders = getOrders
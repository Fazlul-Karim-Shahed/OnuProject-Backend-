
const { Orders } = require('../../../Models/OrderModel')


const cancelOrder = async (req, res) => {

    const id = req.params.id
    let data = await Orders.deleteOne({ _id: id })
    res.send({ message: 'Order cancelled', error: false, value: data })

}


module.exports.cancelOrder = cancelOrder
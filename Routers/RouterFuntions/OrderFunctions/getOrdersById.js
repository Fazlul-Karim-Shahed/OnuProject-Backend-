
const { Orders } = require('../../../Models/OrderModel')


const getOrdersById = async (req, res) => {

    const id = req.params.id
    let data = await Orders.find({ userId: id }).sort({ createdAt: -1 })
    console.log(data);
    res.send({ message: 'All orders by id', error: false, value: data })

}


module.exports.getOrdersById = getOrdersById

const { Orders } = require('../../../Models/OrderModel')


const updateOrderStatus = async (req, res) => {

    const id = req.params.id
    let data = await Orders.updateOne({ _id: id }, { productStatus: req.body.productStatus })
    console.log(id, data);

    res.send({ message: 'Status updated', error: false, value: data })

}


module.exports.updateOrderStatus = updateOrderStatus
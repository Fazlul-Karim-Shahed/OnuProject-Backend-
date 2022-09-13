const { Finishings } = require('../../../../Models/FinishingModel')

const getFinishing = async (req, res) => {

    const id = req.params.id
    const data = await Finishings.find({ productId: id })

    if (data.length === 0) return res.send({ message: 'Not found', error: true });

    res.send({ message: 'All finishings', error: false, value: data })


}
module.exports.getFinishing = getFinishing
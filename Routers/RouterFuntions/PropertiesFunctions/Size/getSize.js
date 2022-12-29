const { Sizes } = require('../../../../Models/SizeModel')

const getSize = async (req, res) => {

    const id = req.params.id
    const data = await Sizes.find({ productId: id }).sort({ additionalPrice: -1 })

    if (data.length === 0) return res.send({ message: 'Not found', error: true });

    res.send({ message: 'All sizes', error: false, value: data })


}
module.exports.getSize = getSize
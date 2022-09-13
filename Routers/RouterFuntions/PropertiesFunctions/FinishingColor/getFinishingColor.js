const { FinishingColors } = require('../../../../Models/FinishingColorModel')

const getFinishingColor = async (req, res) => {

    const id = req.params.id
    const data = await FinishingColors.find({ productId: id })

    if (data.length === 0) return res.send({ message: 'Not found', error: true });

    res.send({ message: 'All finishing colors', error: false, value: data })


}
module.exports.getFinishingColor = getFinishingColor
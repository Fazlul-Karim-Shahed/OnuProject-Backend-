const { FinishingColors } = require('../../../../Models/FinishingColorModel')

const createFinishingColor = async (req, res) => {

    const data = await FinishingColors.findOne({ productId: req.body.productId, finishingColor: req.body.finishingColor })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let finishingColor = new FinishingColors(req.body)

    finishingColor = await finishingColor.save()
    res.send({ message: 'Finishing color name create successfully', error: false, value: finishingColor })

}

module.exports.createFinishingColor = createFinishingColor
const { FinishingColors } = require('../../../Models/FinishingColorModel')

const createFinishingColor = async (req, res) => {

    const productId = req.params.productId
    const data = await FinishingColors.findOne({ productId: productId, finishingColor: req.body.finishingColor })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let finishingColor = new FinishingColors({ productId: productId, finishingColor: req.body.finishingColor, additionalPrice: req.body.additionalPrice })

    finishingColor = await finishingColor.save()
    res.send({ message: 'Finishing color name create successfully', error: false, value: finishingColor })

}

module.exports.createFinishingColor = createFinishingColor
const { Finishings } = require('../../../Models/FinishingModel')

const createFinishing = async (req, res) => {

    const productId = req.params.productId
    const data = await Finishings.findOne({ productId: productId, finishing: req.body.finishing })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let finishing = new Finishings({ productId: productId, finishing: req.body.finishing, additionalPrice: req.body.additionalPrice })

    finishing = await finishing.save()
    res.send({ message: 'Finishing name create successfully', error: false, value: finishing })

}
module.exports.createFinishing = createFinishing
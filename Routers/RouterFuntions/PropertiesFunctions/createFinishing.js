const { Finishings } = require('../../../Models/FinishingModel')

const createFinishing = async (req, res) => {

    const data = await Finishings.findOne({ productId: req.body.productId, finishing: req.body.finishing })

    if (data) return res.send({ message: 'Already exist', error: true });

    let finishing = new Finishings(req.body)
    console.log(finishing);

    finishing = await finishing.save()
    res.send({ message: 'Finishing name create successfully', error: false, value: finishing })

}
module.exports.createFinishing = createFinishing
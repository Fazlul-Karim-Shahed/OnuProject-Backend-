const { Sizes } = require('../../../Models/SizeModel')

const createSize = async (req, res) => {

    const productId = req.params.productId
    const data = await Sizes.findOne({ productId: productId, size: req.body.size })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let size = new Sizes({ productId: productId, size: req.body.size, additionalPrice: req.body.additionalPrice })

    size = await size.save()
    res.send({ message: 'Finishing color name create successfully', error: false, value: size })

}

module.exports.createSize = createSize
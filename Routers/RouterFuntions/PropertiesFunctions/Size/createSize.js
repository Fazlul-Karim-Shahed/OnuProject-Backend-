const { Sizes } = require('../../../../Models/SizeModel')

const createSize = async (req, res) => {

    const data = await Sizes.findOne({ productId: req.body.productId, size: req.body.size })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let size = new Sizes(req.body)

    size = await size.save()
    res.send({ message: 'Size name create successfully', error: false, value: size })

}

module.exports.createSize = createSize
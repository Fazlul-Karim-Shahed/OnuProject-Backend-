const { PartsInfos } = require('../../../../Models/PartsInfoModel')

const createPartsInfo = async (req, res) => {

    const data = await PartsInfos.findOne({ $and: [{ productId: req.body.productId }, { size: req.body.partsInfo }] })
    if (data) {
        res.send({ message: 'Already exist', error: true })
    }
    let partsInfo = new PartsInfos(req.body)
    partsInfo = await partsInfo.save()
    res.send({ message: 'Parts info name create successfully', error: false, value: partsInfo })

}

module.exports.createPartsInfo = createPartsInfo
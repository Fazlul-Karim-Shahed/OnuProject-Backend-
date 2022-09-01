const { PartsInfos } = require('../../../Models/PartsInfoModel')

const createPartsInfo = async (req, res) => {

    const productId = req.params.productId

    let partsInfo = new PartsInfos({ productId: productId, partsInfo: req.body.partsInfo, additionalPrice: req.body.additionalPrice })

    partsInfo = await partsInfo.save()
    res.send({ message: 'Finishing color name create successfully', error: false, value: partsInfo })

}

module.exports.createPartsInfo = createPartsInfo
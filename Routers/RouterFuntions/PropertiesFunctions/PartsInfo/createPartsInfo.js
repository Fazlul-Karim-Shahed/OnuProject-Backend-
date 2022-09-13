const { PartsInfos } = require('../../../../Models/PartsInfoModel')

const createPartsInfo = async (req, res) => {

    let partsInfo = new PartsInfos(req.body)
    partsInfo = await partsInfo.save()
    res.send({ message: 'Parts info name create successfully', error: false, value: partsInfo })

}

module.exports.createPartsInfo = createPartsInfo
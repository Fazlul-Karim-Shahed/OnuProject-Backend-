const { Sizes } = require('../../../Models/SizeModel')
const { Finishings } = require('../../../Models/FinishingModel')
const { PartsInfos } = require('../../../Models/PartsInfoModel')
const { FinishingColors } = require('../../../Models/FinishingColorModel')

const getAllPropertiesById = async (req, res) => {

    const id = req.params.id
    const size = await Sizes.find({ productId: id })
    const finishing = await Finishings.find({ productId: id })
    const finishingColor = await FinishingColors.find({ productId: id })
    const partsInfo = await PartsInfos.find({ productId: id })

    res.send({
        message: 'All properties', error: false, value: {
            finishing: finishing,
            finishingColor: finishingColor,
            size: size,
            partsInfo: partsInfo
        }
    })

}

module.exports.getAllPropertiesById = getAllPropertiesById
const { Sizes } = require('../../../Models/SizeModel')
const { Finishings } = require('../../../Models/FinishingModel')
const { PartsInfos } = require('../../../Models/PartsInfoModel')
const { FinishingColors } = require('../../../Models/FinishingColorModel')

const getAllProperties = async (req, res) => {

    const size = await Sizes.find().sort({ additionalPrice: 1 })
    const finishing = await Finishings.find()
    const finishingColor = await FinishingColors.find()
    const partsInfo = await PartsInfos.find()

    res.send({
        message: 'All properties', error: false, value: {
            finishing: finishing,
            finishingColor: finishingColor,
            size: size,
            partsInfo: partsInfo
        }
    })

}

module.exports.getAllProperties = getAllProperties
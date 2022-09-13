const { PartsInfos } = require('../../../../Models/PartsInfoModel')

const getPartsInfo = async (req, res) => {

    const id = req.params.id
    const data = await PartsInfos.find({ productId: id })

    if (data.length === 0) return res.send({ message: 'Not found', error: true });

    res.send({ message: 'All Parts infos', error: false, value: data })


}
module.exports.getPartsInfo = getPartsInfo
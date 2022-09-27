
const { Orders } = require('../../../Models/OrderModel')
const { Carts } = require('../../../Models/CartModel')

const ipn = async (req, res) => {

    let data = req.body

    if (data.status === 'VALID') {

        await Orders.updateOne({ transactionId: data.tran_id }, {
            transactionDate: data.tran_date,
            validationId: data.val_id,
            storeAmount: data.store_amount,
            cardType: data.card_type,
            cardNo: data.card_no,
            bankTransactionId: data.bank_tran_id,
            cardIssuer: data.card_issuer,
            cardBrand: data.card_brand,
            cardIssuerCountryCode: data.card_issuer_country_code,
            currencyAmount: data.currency_amount,
            valueA: data.value_a,
            verifyKey: data.verify_key
        })

        await Carts.deleteMany({ userId: data.value_a })

    }
    else {
        await Orders.deleteOne({ transactionId: data.tran_id })
    }


}


module.exports.ipn = ipn

const formData = require('form-data')
const axios = require('axios').default
const generateUniqueId = require('generate-unique-id')
const { Orders } = require('../../../Models/OrderModel')


const createPayment = async (req, res) => {

    let data = req.body

    const payData = {
        store_id: 'shahe60d34a78a55ae',
        store_passwd: 'shahe60d34a78a55ae@ssl',
        total_amount: data.total,
        currency: 'BDT',
        tran_id: generateUniqueId({ length: 30, useNumbers: true, useLetters: true, includeSymbols: ['@'] }),
        success_url: 'https://onu-project-38acc.firebaseapp.com/success',
        fail_url: 'https://onu-project-38acc.firebaseapp.com/fail',
        cancel_url: 'https://onu-project-38acc.firebaseapp.com/cancel',
        ipn_url: 'https://calm-scrubland-88798.herokuapp.com/payment/ipn',
        emi_option: 0,
        shipping_method: 'Courier',
        product_category: 'furniture',
        product_name: data.productName,
        product_profile: 'physical-goods',
        cus_name: data.firstName + " " + data.lastName,
        cus_email: data.email,
        cus_add1: data.address,
        cus_city: data.city,
        cus_postcode: data.postCode,
        cus_country: 'Bangladesh',
        cus_phone: data.phone,
        ship_name: data.firstName + " " + data.lastName,
        ship_add1: data.address,
        ship_city: data.city,
        ship_postcode: data.postCode,
        ship_country: 'Bangladesh'
    }

    let fd = new formData()
    for (let i in payData) {
        fd.append(i, payData[i])
    }

    axios.post('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', fd)
        .then(response => {
            if (response.data.status === 'SUCCESS') {

                let obj = {}
                obj.cartItem = data.cartItem
                obj.userId = data.userId
                obj.paymentMethod = data.payment
                obj.totalAmount = data.total
                obj.transactionId = payData.tran_id
                obj.profile = {
                    customerName: payData.cus_name,
                    email: data.email,
                    address: data.address,
                    city: data.city,
                    postCode: data.postCode,
                    phone: data.phone,
                    value_a: data.userId
                }
                obj.sessionKey = response.data.sessionkey
                console.log('obj', obj);
                let order = new Orders(obj)
                order.save((err, result) => {
                    console.log(err, result);
                    if (!err) return res.send(response.data)
                })

            }
            else return res.send(response.data)
        })

}


module.exports.createPayment = createPayment
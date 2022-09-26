
const formData = require('form-data')
const axios = require('axios').default


const createPayment = async (req, res) => {

    let data = req.body

    const payData = {
        store_id: 'shahe60d34a78a55ae',
        store_passwd: 'shahe60d34a78a55ae@ssl',
        total_amount: data.total,
        currency: 'BDT',
        tran_id: Math.random().toString(),
        success_url: 'http://localhost:3000/success',
        fail_url: 'http://localhost:3000/fail',
        cancel_url: 'http://localhost:3000/cancel',
        ipn_url: 'https://calm-scrubland-88798.herokuapp.com/payment/ipn',
        emi_option: 0,
        shipping_method: 'Courier',
        product_category: 'furniture',
        product_name: data.productName,
        product_profile: 'physical-goods',
        cus_name: data.firstName + data.lastName,
        cus_email: data.email,
        cus_add1: data.address,
        cus_city: data.city,
        cus_postcode: data.postCode,
        cus_country: 'Bangladesh',
        cus_phone: data.phone,
        ship_name: data.firstName + data.lastName,
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
        .then(data => {
            console.log(data.data);
            res.send(data.data)
        })

}


module.exports.createPayment = createPayment
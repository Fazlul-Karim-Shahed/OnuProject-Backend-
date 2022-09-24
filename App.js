require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
var bodyParser = require('body-parser');
const ProductRouter = require('./Routers/ProductRouter')
const CategoryRouter = require('./Routers/CategoryRouter')
const UserRouter = require('./Routers/UserRouter')
const CatalogRouter = require('./Routers/CatalogRouter')
const SubCategoryRouter = require('./Routers/SubCategoryRouter')
const ProductPropertiesRouter = require('./Routers/ProductPropertiesRouter')
const PropertiesRouter = require('./Routers/PropertiesRouter')
const CartRouter = require('./Routers/CartRouters')
const PaymentRouter = require('./Routers/PaymentRouter')

/////////////////

dotenv.config()
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(cors())
app.use(compression())

///////////////
const DB = process.env.MONGODB_DATABASE.replace('<password>', process.env.MONGODB_PASS)

// mongoose.connect(process.env.MONGODB_LOCAL + '/OnuProject')
//     .then(data => console.log('Successfully connected to MongoDB Server'))
//     .catch(data => {
//         console.log(data);
//         console.log('Something went wrong with MongoDB Server')
//     })


mongoose.connect(DB)
    .then(data => console.log('Successfully connected to MongoDB Server'))
    .catch(data => {
        console.log(data);
        console.log('Something went wrong with MongoDB Server')
    })



//////////////
app.use('/product', ProductRouter)
app.use('/category', CategoryRouter)
app.use('/user', UserRouter)
app.use('/catalog', CatalogRouter)
app.use('/subcategory', SubCategoryRouter)
app.use('/product-properties', ProductPropertiesRouter)
app.use('/properties', PropertiesRouter)
app.use('/cart', CartRouter)
app.use('/payment', PaymentRouter)

app.use((err, req, res, next) => {
    res.status(500).send({ message: 'Something went wrong', error: true })
})

///////////////////////////////
const port = process.env.PORT
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
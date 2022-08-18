require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const ProductRouter = require('./Routers/ProductRouter')
const CategoryRouter = require('./Routers/CategoryRouter')
const UserRouter = require('./Routers/UserRouter')

/////////////////

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(compression())

///////////////
const DB = process.env.MONGODB_DATABASE.replace('<password>', process.env.MONGODB_PASS)

mongoose.connect(DB)
    .then(data => console.log('Successfully connected to MongoDB Server'))
    .catch(data => console.log('Something went wrong with MongoDB Server'))



//////////////
app.use('/product', ProductRouter)
app.use('/category', CategoryRouter)
app.use('/user', UserRouter)

app.use((err, req, res, next) => {
    res.status(500).send({ message: 'Something went wrong', error: true })
})

///////////////////////////////
const port = process.env.PORT
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
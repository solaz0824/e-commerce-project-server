const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 7070 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next()
});


mongoose.connect(`mongodb://127.0.0.1/webpage`, ()=>{
    console.log('connected to mongodb')
})



app.use('/payment',require('./routes/payment.js'))

app.use('/orders', require('./routes/orders.js'))
//use always the first part of the path
app.use('/products', require('./routes/products.js'))
app.use('/users', require('./routes/users.js'));
app.use('/category', require('./routes/category.js'))
app.use('/email', require('./routes/email.js'))


app.listen(port, ()=>{
 console.log(`server running on port ${port}`)
})
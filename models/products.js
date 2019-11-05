const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    product: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: true,
        //default: 'https://semantic-ui.com/images/wireframe/image.png'
    },
    bestSeller: {
        type: Boolean,
        required: true
    },
    onSale: {
        type: Boolean,
        required: true
    },
    category_id:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('products',productsSchema)
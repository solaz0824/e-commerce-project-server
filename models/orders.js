const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    userData: {
        type: Object,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('orders',orderSchema)
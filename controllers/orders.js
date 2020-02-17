const Orders = require('../models/orders.js')
const orderEmail = require('../helpers/orderEmail.js')




const create = async (req, res) => {
    let {userData, cart , total} = req.body
    try{
        const newOrder = await Orders.create({userData, cart, total})
       orderEmail(userData.email, userData.name, newOrder._id, res, total, cart) 
     }
     catch(error) {
        res.send({ok: false})
     }
}


const displayOrders = async(req, res) => {
    try{
        const display = await Orders.find({})
        res.send({ok:true, display})
    }
    catch(error) {
        res.send({ok: false})
    }
}

const displayByUsers = async(req, res) => {
    try {
        const orders = await Orders.find({_id:req.params._id})
        res.send({ok:true, orders})
    } catch(error) {
        res.send({ok: false})
    }
}







module.exports = {
    create,
    displayOrders,
    displayByUsers
}
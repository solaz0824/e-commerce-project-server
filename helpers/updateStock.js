const Products = require('../models/products.js')




const updateStock =(cart, res, email, name, total, _id) => {
    try{
        cart.forEach(async(ele)=>{
            let product = await Products.findOne({_id: ele._id})
            let updatedStock = product.stock - ele.qty
            let setStock = await Products.update({_id: ele._id},
              {$set: {stock: updatedStock}})
        })
        res.send({ok:true, cart, email, name, total, _id})
    }
    catch(error) {
        console.log(error)
    }
}



module.exports = updateStock
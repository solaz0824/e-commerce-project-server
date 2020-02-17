const Products = require('../models/products.js')


const create = async(req, res) => {
    try {
        const newProduct = await Products.create({
            product: req.body.product,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            bestSeller: req.body.bestSeller,
            onSale: req.body.onSale,
            category_id: req.body.category_id,
            images: req.body.images
        })
        res.send({ok:true, newProduct})
    }
    catch(error) {
        res.send({ok:false, error})
    }
}

const remove = async (req, res) => {
    try { 
        const removed = await Products.remove({_id: req.body._id})
        res.send({ok: true})
    }
    catch(error) {
        res.send({ok: false})
    }
}

 const display = async (req, res) => {
     try {
         const allProducts = await Products.find({})
            res.send({ok: true, allProducts})

     }
     catch(error) { 
         res.send({ok: false})

     }
 }

 const displayOne = async(req, res) => {
     try {
         const oneProduct = await Products.findOne({_id: req.params._id})
         res.send({ok: true, oneProduct})
     }
     catch(error) {
         res.send({ok: false})
     }
 }



 const update = async (req, res) => {
    try {
        const updated = await Products.update({_id: req.body._id}, 
            {$set: {product: req.body.form.product, 
                    price: req.body.form.price, 
                    stock: req.body.form.stock,
                    description: req.body.form.description,
                    image: req.body.form.image,
                    bestSeller: req.body.form.bestSeller,
                    onSale: req.body.form.onSale
                }})
            res.send({ok: true, message: 'product updated'})
    } 
    catch(error) {
        res.send({ok:false, error})
    }
}

const getCart = async (req, res) => {
    let ids = []
    req.body.cart.map((ele)=>{
        ids.push(ele._id)
    })
    try {
        const products = await Products.find({ _id : { $in : ids } })
        res.send({products})
        
    }
    catch(error) {
        res.send({ok:false, error})
    }
}

const sort = async (req, res) => {
    let order = req.params.order
  try {  
  res.send({ok:true,allProducts:await Products.find({}).sort({price: order})})
}
catch(error){
    res.send({ok:false, error})
}
}


const getByCategory = async (req, res) => {
    try {
        const category = await Products.find({category_id:req.params.category_id}) 
        res.send({ok: true, category})
    }
    catch(error){
        res.send({ok:false, error})
    }
}

const search = async(req, res) => {
    var regex = new RegExp(req.params.text);
    try {
        const products = await Products.find({product:regex})
        return res.send({ok:true,products})
    }
    catch(error){
        res.send({ok:false, error})
    }
}


module.exports = {
    create, 
    remove,
    display,
    update,
    displayOne,
    getCart,
    sort,
    getByCategory,
    search
}

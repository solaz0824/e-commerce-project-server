const Category = require('../models/category.js')

const create = async (req, res) => {
    let {category} = req.body
    try{
        const created = await Category.create({category})
        res.send({ok: true})
    }
    catch (error) {
        res.send({ok:false,error})
    }
}

const display = async(req, res) => {
    try{
       const allCategories = await Category.find({})
        res.send({ok: true, allCategories})
    }
    catch(error){
        res.send({ok:false, error})
    }
}

module.exports = {create, display}
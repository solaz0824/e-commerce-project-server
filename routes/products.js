const router = require('express').Router()
const controller = require('../controllers/products.js')

router.post('/create', controller.create)
router.post('/remove', controller.remove)
router.get('/display', controller.display)
router.post('/update', controller.update)
router.get('/displayOne/:_id', controller.displayOne)
router.post('/getCart', controller.getCart)
router.get('/sort/:order', controller.sort)
router.get('/getbycategory/:category_id', controller.getByCategory)
router.get('/search/:text', controller.search)


module.exports = router 
const router = require('express').Router()
const controller = require('../controllers/orders.js')

router.post('/create', controller.create)
router.get('/display', controller.displayOrders)
router.get('/displaybyusers/:user_id', controller.displayByUsers)



module.exports = router 
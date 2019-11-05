const router = require('express').Router()
const controller = require('../controllers/payment.js')

router.post('/', controller.payment)


module.exports = router 
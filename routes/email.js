const router = require('express').Router()
const controller = require('../controllers/email.js')

router.post('/contact', controller.contact)


module.exports = router
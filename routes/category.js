const router = require('express').Router()
const controller = require('../controllers/category.js')

router.post('/create', controller.create)
router.get('/display', controller.display)

module.exports = router 
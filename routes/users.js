const router = require('express').Router();
const controller = require('../controllers/users.js')

router.post('/register',controller.register);
router.post('/login',controller.login);
router.post('/verify_token',controller.verify_token);
router.get('/displayusers', controller.displayUsers)

module.exports = router;
const express = require('express');
const { signup, login, get_user } = require('../Controller/AuthController.js');

const router  = express.Router();
const auth = require('../middleware/auth.js');

router.post('/register',  signup);
router.post('/login', login);
router.get('/user', auth, get_user);
module.exports = router;
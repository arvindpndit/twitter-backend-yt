const express = require('express');

const { login, signup } = require('../../controllers/auth-controller.js');
const { create } = require('../../controllers/tweet-controller.js');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

router.post('/create', create);

module.exports = router;


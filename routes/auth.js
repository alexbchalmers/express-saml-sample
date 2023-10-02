var express = require('express');

const authProvider = require('../auth/authProvider');

const router = express.Router();

router.get('/login', authProvider.login());

router.post('/response', authProvider.verifyResponse());

module.exports = router;
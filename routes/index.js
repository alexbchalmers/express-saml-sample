var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express Sample',
    isAuthenticated: req.session.isAuthenticated,
    user: req.session.samlResponse
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

function isAuthenticated(req,res,next) {
  if(!req.session.isAuthenticated) {
    return res.redirect('/auth/login');
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

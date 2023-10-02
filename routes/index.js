var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express Sample',
    isAuthenticated: req.session.isAuthenticated,
    user: {
      nameId: req.session.nameID,
      email: req.session.email,
      displayname: req.session.displayname
    }
  });
});

module.exports = router;

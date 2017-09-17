var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress', 'w_share', 'rw_company_admin'] }));

router.get('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
    });

module.exports = router;

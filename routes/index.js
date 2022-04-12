const express = require('express');
const router = express.Router();
const passport = require('passport');

// The root route renders index(homepage)
router.get('/', function(req, res) {
  res.render('index');
}); 
router.post('/', function(req, res){
// user posts their content link here
})
  // in the student demo this was res.redirect('/students'), what do you want?
  // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
  // a request to `/auth/google` route below

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', //after login client is returned to the index(home) paige where are the content is being fed
    failureRedirect : '/' //and same if it failed
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');//user still gets to see homepage so route is just '/' (the index/homepage)
});

module.exports = router;

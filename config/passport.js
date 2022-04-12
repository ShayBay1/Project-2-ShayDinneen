const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User');

// configuring Passport!
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({googleId: profile.id}, function(err, user){  // a user has logged in via OAuth!
      console.log(user, '<--------------right here');
      if (user) return cb(null, user);
      if (err) return cb(err);
      User.create({
        name: profile.displayName,
        googleId: profile.id,
        avatar: profile.photos[0].value
      }, function(err, createdUser){
        if (createdUser) return cb(null, createdUser);
        if (err) return cb(err);
      })
    })
  })
)

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(userId, cb){
	User.findById(userId).then(function(user) {
    cb(null, user);
  });
});
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
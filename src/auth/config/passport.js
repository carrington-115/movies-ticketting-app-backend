const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const DatabaseAuth = require("../models/index");
const User = new DatabaseAuth();

passport.use(
  LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.getUserByUsername(username);
      if (!user)
        return done(null, false, { message: "The username does not exist" });
      const isMatch = await bcrypt.compare(user.password, password);
      if (!isMatch)
        return done(null, false, { message: "The password is incorrect" });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
  passport.initialize(),
  passport.session()
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.getUserById(id);
    done(null, user);
  } catch (err) {
    return done(null, err);
  }
});

module.exports = passport;

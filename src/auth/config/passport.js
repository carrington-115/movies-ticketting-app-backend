const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const DatabaseAuth = require("../models/index");
const User = new DatabaseAuth();

passport.use(
  LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.getUserByUsername(username);
      if (!user) return done({ message: "The username does not exist" });
      const isMatch = await bcrypt.compare(user.password, password);
      if (!isMatch) return done({ message: "The password is incorrect" });
      return user;
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
  const user = await User.getUserById(id);
  done(null, user);
});

module.exports = passport;

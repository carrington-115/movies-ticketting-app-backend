const DatabaseAuth = require("../models/index");
const User = new DatabaseAuth();

const signUpUser = async (req, res) => {
  const { username, password } = req.body;
  await User.createUser(username, password);
  res.redirect("/login");
};

const userProfileRoute = (req, res) => {
  if (!req.isAuthenticated) res.redirect("/auth/login");
  const { username } = req.user;
  res.status(200).json({
    success: true,
    message: `Hello ${username}. Thanks for signing in`,
  });
};

const logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/auth/login");
  });
};

module.exports = { signUpUser, userProfileRoute, logoutUser };

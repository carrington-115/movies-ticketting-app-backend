const DatabaseAuth = require("../models/index");
const User = new DatabaseAuth();

const signUpUser = async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.createUser(username, password);
  res.redirect("/login");
};

const userProfileRoute = (req, res) => {
  const { username } = req.user;
  res.status(200).json({
    success: true,
    message: `Hello ${username}. Thanks for signing in`,
  });
};

const logoutUser = (req, res) => {
  req.logout();
  res.redirect("/auth/login");
};

module.exports = { signUpUser, userProfileRoute, logoutUser };

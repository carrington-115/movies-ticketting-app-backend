const protectRouteMiddleWare = (req, res, next) => {
  if (!req.user) return next();
  res.redirect("/auth/profile");
};

module.exports = protectRouteMiddleWare;

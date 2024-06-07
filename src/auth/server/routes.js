const express = require("express");
const router = express.Router();
const { signUpUser, logoutUser, userProfileRoute } = require("./controllers");
const protectRouteMiddleware = require("./middleware");
const passport = require("../config/passport");

router.post("/signup", protectRouteMiddleware, signUpUser);
router.post(
  "/login",
  protectRouteMiddleware,
  passport.authenticate("local", {
    successRedirect: "/auth/profile",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);
router.get("/profile", userProfileRoute);
router.get("/logout", logoutUser);

return router;

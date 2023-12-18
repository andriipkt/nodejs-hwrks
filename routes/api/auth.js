const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../schemas");
const { authControllers } = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  authControllers.register
);

router.post(
  "/login",
  validateBody(userSchemas.loginSchema),
  authControllers.logIn
);

router.get("/users/current", authenticate, authControllers.getCurrent);

router.post("/logout", authenticate, authControllers.logOut);

router.patch(
  "/users",
  authenticate,
  validateBody(userSchemas.updateSubscriptionSchema),
  authControllers.updateSubscription
);

module.exports = router;

const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
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

router.post("/logout", authenticate, authControllers.logOut);

router.get("/current", authenticate, authControllers.getCurrent);

router.patch(
  "/subscription",
  authenticate,
  validateBody(userSchemas.updateSubscriptionSchema),
  authControllers.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authControllers.updateAvatar
);

module.exports = router;

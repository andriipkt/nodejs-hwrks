const express = require("express");
const { validateBody } = require("../../middlewares");
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

module.exports = router;

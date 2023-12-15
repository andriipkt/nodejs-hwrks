const express = require("express");
const router = express.Router();
const { contactControllers } = require("../../controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { contactSchemas } = require("../../schemas");

router.get("/", authenticate, contactControllers.getAll);

router.get("/:contactId", authenticate, isValidId, contactControllers.getById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addingSchema),
  contactControllers.addNew
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  contactControllers.deleteContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addingSchema),
  contactControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  contactControllers.updateContact
);

module.exports = router;

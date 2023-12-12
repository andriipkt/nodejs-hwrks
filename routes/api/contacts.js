const express = require("express");
const router = express.Router();
const controller = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", controller.getAll);

router.get("/:contactId", isValidId, controller.getById);

router.post("/", validateBody(schemas.addingSchema), controller.addNew);

router.delete("/:contactId", isValidId, controller.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addingSchema),
  controller.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controller.updateContact
);

module.exports = router;

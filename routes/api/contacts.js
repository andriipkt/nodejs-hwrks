const express = require("express");
const router = express.Router();
const controller = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/books");

router.get("/", controller.getAll);

router.get("/:contactId", controller.getById);

router.post("/", validateBody(schemas.addingSchema), controller.addNew);

router.delete("/:contactId", controller.deleteContact);

router.put(
  "/:contactId",
  validateBody(schemas.addingSchema),
  controller.updateContact
);

module.exports = router;

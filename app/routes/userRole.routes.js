module.exports = (app) => {
  const userRole = require("../controllers/userRole.controller.js");

  var router = require("express").Router();

  // Create a new UserRole
  router.post("/", userRole.create);

  // Retrieve all UserRoles
  router.get("/", userRole.findAll);

  // Retrieve a single UserRole with id
  router.get("/:id", userRole.findOne);

  // Update a UserRole with id
  router.put("/:id", userRole.update);

  // Delete a UserRole with id
  router.delete("/:id", userRole.delete);

  app.use("/asset-t1/userRole", router);
};

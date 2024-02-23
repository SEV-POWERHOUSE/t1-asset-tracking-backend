module.exports = (app) => {
  const userRole = require("../controllers/userRole.controller.js");

  var router = require("express").Router();

  // Create a new UserRole
  router.post("/", userRole.create);

  // Retrieve all UserRoles
  router.get("/", userRole.findAll);

  // Retrieve a single UserRole with id
  router.get("/:userRoleId", userRole.findOne);

  // Update a UserRole with id
  router.put("/:userRoleId", userRole.update);

  // Delete a UserRole with id
  router.delete("/:userRoleId", userRole.delete);

  app.use("/asset-t1/userRole", router);
};

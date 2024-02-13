module.exports = (app) => {
  const userGroup = require("../controllers/userGroup.controller.js");

  var router = require("express").Router();

  // Create a new UserGroup
  router.post("/", userGroup.create);

  // Retrieve all UserGroups
  router.get("/", userGroup.findAll);

  // Retrieve a single UserGroup with id
  router.get("/:id", userGroup.findOne);

  // Update a UserGroup with id
  router.put("/:id", userGroup.update);

  // Delete a UserGroup with id
  router.delete("/:id", userGroup.delete);

  app.use("/asset-t1/userGroup", router);
};

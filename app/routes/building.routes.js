module.exports = (app) => {
    const building = require("../controllers/building.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Building
    router.post("/", [authenticate], building.create);
  
    // Retrieve all Buildings
    router.get("/", [authenticate], building.findAll);
  
    // Retrieve a single Building by buildingId
    router.get("/:buildingId", [authenticate], building.findOne);
  
    // Retrieve a single Building by name
    router.get("/name/:name", [authenticate], building.findByName);
  
    // Update a Building by buildingId
    router.put("/:buildingId", [authenticate], building.update);
  
    // Delete a Building by buildingId
    router.delete("/:buildingId", [authenticate], building.delete);
  
    // Delete all Buildings
    router.delete("/", [authenticate], building.deleteAll);
  
    app.use("/asset-t1/building", router);
  };
  
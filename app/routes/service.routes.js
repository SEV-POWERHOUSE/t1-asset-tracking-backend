module.exports = (app) => {
    const service = require("../controllers/service.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Service
    router.post("/", [authenticate], service.createService);
  
    // Retrieve all Services
    router.get("/", [authenticate], service.getAllServices);
  
    // Retrieve a single Service by serviceId
    router.get("/:serviceId", [authenticate], service.getServiceById);
  
    // Update a Service by serviceId
    router.put("/:serviceId", [authenticate], service.updateService);
  
    // Delete a Service by serviceId
    router.delete("/:serviceId", [authenticate], service.deleteService);
  
    // Delete all Services
    router.delete("/", [authenticate], service.deleteAllServices);
  
    app.use("/asset-t1/service", router);
  };
  
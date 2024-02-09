module.exports = (app) => {
    const logType = require("../controllers/logType.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new LogType
    router.post("/", [authenticate], logType.createLogType);
  
    // Retrieve all LogTypes
    router.get("/", [authenticate], logType.getAllLogTypes);
  
    // Retrieve a single LogType by logTypeId
    router.get("/:logTypeId", [authenticate], logType.getLogTypeById);
  
    // Update a LogType by logTypeId
    router.put("/:logTypeId", [authenticate], logType.updateLogType);
  
    // Delete a LogType by logTypeId
    router.delete("/:logTypeId", [authenticate], logType.deleteLogType);
  
    // Delete all LogTypes
    router.delete("/", [authenticate], logType.deleteAllLogTypes);
  
    app.use("/asset-t1/logType", router);
  };
  
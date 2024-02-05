module.exports = (app) => {
    const log = require("../controllers/logController.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Log
    router.post("/", [authenticate], log.createLog);
  
    // Retrieve all Logs
    router.get("/", [authenticate], log.getAllLogs);
  
    // Retrieve a single Log by logId
    router.get("/:logId", [authenticate], log.getLogById);
  
    // Update a Log by logId
    router.put("/:logId", [authenticate], log.updateLog);
  
    // Delete a Log by logId
    router.delete("/:logId", [authenticate], log.deleteLog);
  
    // Delete all Logs
    router.delete("/", [authenticate], log.deleteAllLogs);
  
    app.use("/asset-t1/logs", router);
  };
  
module.exports = (app) => {
    const lease = require("../controllers/lease.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Lease
    router.post("/", [authenticate], lease.createLease);
  
    // Retrieve all Leases
    router.get("/", [authenticate], lease.getAllLeases);
  
    // Retrieve a single Lease by leaseId
    router.get("/:leaseId", [authenticate], lease.getLeaseById);
  
    // Update a Lease by leaseId
    router.put("/:leaseId", [authenticate], lease.updateLease);
  
    // Delete a Lease by leaseId
    router.delete("/:leaseId", [authenticate], lease.deleteLease);
  
    // Delete all Leases
    router.delete("/", [authenticate], lease.deleteAllLeases);
  
    app.use("/asset-t1/lease", router);
  };
  
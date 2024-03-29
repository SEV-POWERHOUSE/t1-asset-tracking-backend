module.exports = (app) => {
    const personAsset = require("../controllers/personAsset.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new PersonAsset
    router.post("/", [authenticate], personAsset.createPersonAsset);
  
    // Retrieve all PersonAsset
    router.get("/", [authenticate], personAsset.getAllPersonAssets);
  
    // Retrieve a single  PersonAsset by  PersonAssetId
    router.get("/:personAssetId", [authenticate], personAsset.getPersonAssetById);
  
    // Update a  PersonAsset by  PersonAssetId
    router.put("/:personAssetId", [authenticate], personAsset.updatePersonAsset);
  
    // Delete a  PersonAsset by  PersonAssetId
    router.delete("/:personAssetId", [authenticate], personAsset.deletePersonAsset);
  
    // Delete all  PersonAsset
    router.delete("/", [authenticate], personAsset.deleteAllPersonAssets);
  
    app.use("/asset-t1/personAsset", router);
  };
  
module.exports = (app) => {
    const assetProfile = require("../controllers/assetProfile.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new AssetProfile
    router.post("/", [authenticate], assetProfile.createAssetProfile);

    // Bulk create from csv
    router.post("/file", [authenticate], assetProfile.bulkCreateAssetProfile)
  
    // Retrieve all AssetProfiles
    router.get("/", [authenticate], assetProfile.getAllAssetProfiles);
  
    // Retrieve a single AssetProfile by profileId
    router.get("/:profileId", [authenticate], assetProfile.getAssetProfileById);
  
    // Update an AssetProfile by profileId
    router.put("/:profileId", [authenticate], assetProfile.updateAssetProfile);
  
    // Delete an AssetProfile by profileId
    router.delete("/:profileId", [authenticate], assetProfile.deleteAssetProfile);
  
    // Delete all AssetProfiles
    router.delete("/", [authenticate], assetProfile.deleteAllAssetProfiles);
  
    app.use("/asset-t1/assetProfile", router);
  };
  
module.exports = (app) => {
    const assetProfile = require("../controllers/assetprofile.Controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new AssetProfile
    router.post("/", [authenticate], assetProfile.createAssetProfile);
  
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
  
    app.use("/asset-t1/assetProfiles", router);
  };
  
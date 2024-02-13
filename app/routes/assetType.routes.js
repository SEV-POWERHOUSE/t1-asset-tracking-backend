module.exports = (app) => {
    const assetType = require("../controllers/assetType.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new AssetType
    router.post("/", [authenticate], assetType.createAssetType);
  
    // Retrieve all AssetTypes
    router.get("/", [authenticate], assetType.getAllAssetTypes);
  
    // Retrieve a single AssetType by typeId
    router.get("/:typeId", [authenticate], assetType.getAssetTypeById);
  
    // Update an AssetType by typeId
    router.put("/:typeId", [authenticate], assetType.updateAssetType);
  
    // Delete an AssetType by typeId
    router.delete("/:typeId", [authenticate], assetType.deleteAssetType);
  
    // Delete all AssetTypes
    router.delete("/", [authenticate], assetType.deleteAllAssetTypes);
  
    app.use("/asset-t1/assetType", router);
  };
  
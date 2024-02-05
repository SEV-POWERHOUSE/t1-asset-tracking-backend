module.exports = (app) => {
    const serialAsset = require("../controllers/serialAssetController.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new SerialAsset
    router.post("/", [authenticate], serialAsset.createSerialAsset);
  
    // Retrieve all SerialAssets
    router.get("/", [authenticate], serialAsset.getAllSerialAssets);
  
    // Retrieve a single SerialAsset by serialAssetId
    router.get("/:serialAssetId", [authenticate], serialAsset.getSerialAssetById);
  
    // Update a SerialAsset by serialAssetId
    router.put("/:serialAssetId", [authenticate], serialAsset.updateSerialAsset);
  
    // Delete a SerialAsset by serialAssetId
    router.delete("/:serialAssetId", [authenticate], serialAsset.deleteSerialAsset);
  
    // Delete all SerialAssets
    router.delete("/", [authenticate], serialAsset.deleteAllSerialAssets);
  
    app.use("/asset-t1/serial-assets", router);
  };
  
module.exports = (app) => {
    const assetCat = require("../controllers/assetCat.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new AssetCat
    router.post("/", [authenticate], assetCat.createAssetCat);
  
    // Retrieve all AssetCats
    router.get("/", [authenticate], assetCat.getAllAssetCats);
  
    // Retrieve a single AssetCat with catId
    router.get("/:catId", [authenticate], assetCat.getAssetCatById);
  
    // Update an AssetCat with catId
    router.put("/:catId", [authenticate], assetCat.updateAssetCat);
  
    // Delete an AssetCat with catId
    router.delete("/:catId", [authenticate], assetCat.deleteAssetCat);
  
    // Delete all AssetCats
    router.delete("/", [authenticate], assetCat.deleteAllAssetCats);
  
    app.use("/asset-t1/assetCat", router);
  };
  
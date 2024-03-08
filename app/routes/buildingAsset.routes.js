module.exports = (app) => {
    const buildingAsset = require("../controllers/buildingAsset.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new BuildingAsset
    router.post("/", [authenticate], buildingAsset.createBuildingAsset);
  
    // Retrieve all BuildingAssets
    router.get("/", [authenticate], buildingAsset.getAllBuildingAssets);
  
    // Retrieve a single BuildingAsset by buildingAssetId
    router.get("/:buildingAssetId", [authenticate], buildingAsset.getBuildingAssetById);
  
    // Update a BuildingAsset by buildingAssetId
    router.put("/:buildingAssetId", [authenticate], buildingAsset.updateBuildingAsset);
  
    // Delete a BuildingAsset by buildingAssetId
    router.delete("/:buildingAssetId", [authenticate], buildingAsset.deleteBuildingAsset);
  
    // Delete all BuildingAssets
    router.delete("/", [authenticate], buildingAsset.deleteAllBuildingAssets);
  
    app.use("/asset-t1/buildingAsset", router);
  };
  
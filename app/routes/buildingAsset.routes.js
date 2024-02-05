module.exports = (app) => {
    const buildingAsset = require("../controllers/buildingAssetController.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new BuildingAsset
    router.post("/", [authenticate], buildingAsset.createBuildingAsset);
  
    // Retrieve all BuildingAssets
    router.get("/", [authenticate], buildingAsset.getAllBuildingAssets);
  
    // Retrieve a single BuildingAsset by buildingId
    router.get("/:buildingId", [authenticate], buildingAsset.getBuildingAssetById);
  
    // Update a BuildingAsset by buildingId
    router.put("/:buildingId", [authenticate], buildingAsset.updateBuildingAsset);
  
    // Delete a BuildingAsset by buildingId
    router.delete("/:buildingId", [authenticate], buildingAsset.deleteBuildingAsset);
  
    // Delete all BuildingAssets
    router.delete("/", [authenticate], buildingAsset.deleteAllBuildingAssets);
  
    app.use("/asset-t1/building-assets", router);
  };
  
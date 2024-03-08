module.exports = (app) => {
    const roomAsset = require("../controllers/roomAsset.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new RoomAsset
    router.post("/", [authenticate], roomAsset.createRoomAsset);
  
    // Retrieve all RoomAssets
    router.get("/", [authenticate], roomAsset.getAllRoomAssets);
  
    // Retrieve a single RoomAsset by roomAssetId
    router.get("/:roomAssetId", [authenticate], roomAsset.getRoomAssetByRoomId);
  
    // Update a RoomAsset by roomAssetId
    router.put("/:roomAssetId", [authenticate], roomAsset.updateRoomAsset);
  
    // Delete a RoomAsset by roomAssetId
    router.delete("/:roomAssetId", [authenticate], roomAsset.deleteRoomAsset);
  
    // Delete all RoomAssets
    router.delete("/", [authenticate], roomAsset.deleteAllRoomAssets);
  
    app.use("/asset-t1/roomAsset", router);
  };
  
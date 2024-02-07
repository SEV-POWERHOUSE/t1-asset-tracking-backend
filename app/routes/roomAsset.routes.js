module.exports = (app) => {
    const roomAsset = require("../controllers/roomAsset.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new RoomAsset
    router.post("/", [authenticate], roomAsset.createRoomAsset);
  
    // Retrieve all RoomAssets
    router.get("/", [authenticate], roomAsset.getAllRoomAssets);
  
    // Retrieve a single RoomAsset by roomId
    router.get("/:roomId", [authenticate], roomAsset.getRoomAssetByRoomId);
  
    // Update a RoomAsset by roomId
    router.put("/:roomId", [authenticate], roomAsset.updateRoomAsset);
  
    // Delete a RoomAsset by roomId
    router.delete("/:roomId", [authenticate], roomAsset.deleteRoomAsset);
  
    // Delete all RoomAssets
    router.delete("/", [authenticate], roomAsset.deleteAllRoomAssets);
  
    app.use("/asset-t1/roomAssets", router);
  };
  
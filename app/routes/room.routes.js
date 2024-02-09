module.exports = (app) => {
    const room = require("../controllers/room.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Room
    router.post("/", [authenticate], room.createRoom);
  
    // Retrieve all Rooms
    router.get("/", [authenticate], room.getAllRooms);
  
    // Retrieve a single Room by roomId
    router.get("/:roomId", [authenticate], room.getRoomById);
  
    // Update a Room by roomId
    router.put("/:roomId", [authenticate], room.updateRoom);
  
    // Delete a Room by roomId
    router.delete("/:roomId", [authenticate], room.deleteRoom);
  
    // Delete all Rooms
    router.delete("/", [authenticate], room.deleteAllRooms);
  
    app.use("/asset-t1/room", router);
  };
  
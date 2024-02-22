const db = require("../models");
const Room = db.room;

async function initializeRooms() {
  try {
    await Promise.all([
      // Assuming buildingId 1 is Science Hall
      Room.upsert({ roomNo: 101, buildingId: 1 }),
      Room.upsert({ roomNo: 102, buildingId: 1 }),
      Room.upsert({ roomNo: 103, buildingId: 1 }),

      // Assuming buildingId 2 is Engineering Building
      Room.upsert({ roomNo: 201, buildingId: 2 }),
      Room.upsert({ roomNo: 202, buildingId: 2 }),
      Room.upsert({ roomNo: 203, buildingId: 2 }),

      // Assuming buildingId 3 is Library
      Room.upsert({ roomNo: 301, buildingId: 3 }),
      Room.upsert({ roomNo: 302, buildingId: 3 }),
      Room.upsert({ roomNo: 303, buildingId: 3 }),

      // Assuming buildingId 4 is Administration Building
      Room.upsert({ roomNo: 401, buildingId: 4 }),
      Room.upsert({ roomNo: 402, buildingId: 4 }),
      Room.upsert({ roomNo: 403, buildingId: 4 }),

      // Assuming buildingId 5 is Student Union
      Room.upsert({ roomNo: 501, buildingId: 5 }),
      Room.upsert({ roomNo: 502, buildingId: 5 }),
      Room.upsert({ roomNo: 503, buildingId: 5 }),
    ]);

    console.log("Rooms initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeRooms };

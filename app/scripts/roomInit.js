const db = require("../models");
const Room = db.room;

async function initializeRooms() {
  try {
    await Promise.all([
      // Assuming buildingId 1 is Science Hall
      Room.upsert({ roomNo: 101, buildingId: 1 }),
      Room.upsert({ roomNo: 102, buildingId: 1 }),
      Room.upsert({ roomNo: 103, buildingId: 1 }),
      Room.upsert({ roomNo: 201, buildingId: 2 }),
      Room.upsert({ roomNo: 202, buildingId: 2 }),
      Room.upsert({ roomNo: 203, buildingId: 2 }),
      Room.upsert({ roomNo: 301, buildingId: 3 }),
      Room.upsert({ roomNo: 302, buildingId: 3 }),
      Room.upsert({ roomNo: 303, buildingId: 3 }),
      Room.upsert({ roomNo: 401, buildingId: 4 }),
      Room.upsert({ roomNo: 402, buildingId: 4 }),
      Room.upsert({ roomNo: 403, buildingId: 4 }),
      Room.upsert({ roomNo: 501, buildingId: 5 }),
      Room.upsert({ roomNo: 502, buildingId: 5 }),
      Room.upsert({ roomNo: 503, buildingId: 5 }),
      Room.upsert({ roomNo: 601, buildingId: 6 }),
      Room.upsert({ roomNo: 602, buildingId: 6 }),
      Room.upsert({ roomNo: 603, buildingId: 6 }),
      Room.upsert({ roomNo: 701, buildingId: 7 }),
      Room.upsert({ roomNo: 702, buildingId: 7 }),
      Room.upsert({ roomNo: 703, buildingId: 7 }),
      Room.upsert({ roomNo: 801, buildingId: 8 }),
      Room.upsert({ roomNo: 802, buildingId: 8 }),
      Room.upsert({ roomNo: 803, buildingId: 8 }),
      Room.upsert({ roomNo: 901, buildingId: 9 }),
      Room.upsert({ roomNo: 902, buildingId: 9 }),
      Room.upsert({ roomNo: 903, buildingId: 9 }),
    ]);

    console.log("Rooms initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeRooms };

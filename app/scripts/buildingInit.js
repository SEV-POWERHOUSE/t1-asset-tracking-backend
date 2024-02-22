const db = require("../models");
const Building = db.building;

async function initializeBuildings() {
    try {
        await Promise.all([
            Building.upsert({ name: 'Science Hall', abbreviation: 'SH', noOfRooms: 20 }),
            Building.upsert({ name: 'Engineering Building', abbreviation: 'EB', noOfRooms: 25 }),
            Building.upsert({ name: 'Library', abbreviation: 'LIB', noOfRooms: 10 }),
            Building.upsert({ name: 'Administration Building', abbreviation: 'AD', noOfRooms: 15 }),
            Building.upsert({ name: 'Student Union', abbreviation: 'SU', noOfRooms: 5 }),
        ]);

        console.log("Buildings initialized successfully");
    } catch (error) {
        console.log("Initialization failed:", error);
    }
}

module.exports = { initializeBuildings };

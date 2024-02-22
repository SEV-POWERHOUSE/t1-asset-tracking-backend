const db = require("../models");
const assetProfile = db.assetProfile;

async function initializeAssetProfile() {
    try {
        await Promise.all([
            assetProfile.upsert({ profileName: 'iPhone 14', typeId: 1, desc: 'Apple smartphone model released in 2022' }),
            assetProfile.upsert({ profileName: 'MacBook Pro M2', typeId: 2, desc: 'Apple laptop with M2 chip, launched in 2022' }),
            assetProfile.upsert({ profileName: 'Cisco Router XR500', typeId: 3, desc: 'High-performance router supporting virtualized services' }),
            assetProfile.upsert({ profileName: 'Dell PowerEdge T340', typeId: 4, desc: 'Tower server designed for small offices and home offices' }),
            assetProfile.upsert({ profileName: 'Ring Video Doorbell 4', typeId: 5, desc: 'Latest version of the smart video doorbell by Ring' }),
        ]);

        console.log("Asset Profile initialized successfully");
    } catch (error) {
        console.log("Initialization failed:", error);
    }
}

module.exports = { initializeAssetProfile };

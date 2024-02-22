const db = require("../models");
const assetType = db.assetType;

async function initializeAssetType() {
    try {
        await Promise.all([
            assetType.upsert({ typeName: 'Phone', categoryId: 1, desc: 'Handheld communication devices' }),
            assetType.upsert({ typeName: 'Laptop', categoryId: 1, desc: 'Portable personal computers' }),
            assetType.upsert({ typeName: 'Router', categoryId: 2, desc: 'Devices that forward data packets between computer networks' }),
            assetType.upsert({ typeName: 'Server', categoryId: 2, desc: 'Systems that provide data services to other computers or devices on a network' }),
            assetType.upsert({ typeName: 'Security System', categoryId: 3, desc: 'Systems designed to detect intrusion or unauthorized entry into a building or area' }),
        ]);

        console.log("Asset Type initialized successfully");
    } catch (error) {
        console.log("Initialization failed:", error);
    }
}

module.exports = { initializeAssetType };
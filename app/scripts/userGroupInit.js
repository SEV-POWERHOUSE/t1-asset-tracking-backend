const db = require("../models");
const userGroup = db.userGroup;


async function initializeUserGroup() {
    try {

        await Promise.all([
            await userGroup.upsert({ name: 'Admin' }),
            await userGroup.upsert({ name: 'Unassigned' }),
            await userGroup.upsert({ name: 'MaintenanceManager' }),
            await userGroup.upsert({ name: 'MaintenanceWorker' }),
            await userGroup.upsert({ name: 'ITManager' }),
            await userGroup.upsert({ name: 'ITWorker' }),
            await userGroup.upsert({ name: 'SupportCentralManager' }),
            await userGroup.upsert({ name: 'SupportCentralWorker' }),
        ])

        console.log("User Group initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUserGroup }

// Love, Zane
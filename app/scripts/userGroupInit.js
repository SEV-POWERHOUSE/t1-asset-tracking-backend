const db = require("../models");
const userGroup = db.userGroup;


async function initializeUserGroup() {
    try {
        await userGroup.sync()

        await Promise.all([
            userGroup.upsert({ name: 'admin' }),
            userGroup.upsert({ name: 'MaintenanceManager' }),
            userGroup.upsert({ name: 'MaintenanceWorker' }),
            userGroup.upsert({ name: 'ITManager' }),
            userGroup.upsert({ name: 'ITWorker' }),
            userGroup.upsert({ name: 'SupportCentralManager' }),
            userGroup.upsert({ name: 'SupportCentralWorker' }),
        ])

        console.log("User Group initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUserGroup }
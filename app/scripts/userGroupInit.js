const db = require("../models");
const userGroup = db.userGroup;


async function initializeUserGroup() {
    try {

        await Promise.all([
            await userGroup.upsert({ name: 'Admin' }),
            await userGroup.upsert({ name: 'Unassigned' }),
            await userGroup.upsert({ name: 'Maintenance Manager' }),
            await userGroup.upsert({ name: 'Maintenance Worker' }),
            await userGroup.upsert({ name: 'IT Manager' }),
            await userGroup.upsert({ name: 'IT Worker' }),
            await userGroup.upsert({ name: 'Support Central Manager' }),
            await userGroup.upsert({ name: 'Support Central Worker' }),
        ])

        console.log("User Group initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUserGroup }
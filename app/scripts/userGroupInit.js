const db = require("../models");
const userRole = db.userRole;


async function initializeUserRole() {
    try {

        await Promise.all([
            await userRole.upsert({ name: 'Admin' }),
            await userRole.upsert({ name: 'Unassigned' }),
            await userRole.upsert({ name: 'Maintenance Manager' }),
            await userRole.upsert({ name: 'Maintenance Worker' }),
            await userRole.upsert({ name: 'IT Manager' }),
            await userRole.upsert({ name: 'IT Worker' }),
            await userRole.upsert({ name: 'Support Central Manager' }),
            await userRole.upsert({ name: 'Support Central Worker' }),
        ])

        console.log("User Role initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUserRole }

// Love, Zane

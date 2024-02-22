const db = require("../models");
const user = db.user;

async function initializeUser() {
    try {

        await Promise.all([
            user.upsert({ fName: 'Jaxen', lName: 'McRay', email: 'jaxen.mcray@eagles.oc.edu', userRoleId: 1, devPermission: 1 }),
            user.upsert({ fName: 'Zane', lName: 'Fike', email: 'z.fike@eagles.oc.edu', userRoleId: 1, devPermission: 1 }),
            user.upsert({ fName: 'Solomon', lName: 'Granger', email: 'solomon.granger@eagles.oc.edu', userRoleId: 1, devPermission: 1 }),
            user.upsert({ fName: 'Justin', lName: 'Davis', email: 'justin.davis@eagles.oc.edu', userRoleId: 1, devPermission: 1 })
        ]);

        console.log("Users initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUser }
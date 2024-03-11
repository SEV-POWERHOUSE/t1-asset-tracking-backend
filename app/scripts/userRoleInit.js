const db = require("../models");
const userRole = db.userRole;


async function initializeUserRole() {
    try {

        await Promise.all([
            await userRole.upsert({ 
                name: 'Admin',
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: true,
            }),
            await userRole.upsert({ 
                name: 'Unassigned',
                defaultCanEdit: false,
                defaultCanArchive: false,
                defaultCanActivate: false,
                defaultCanDelete: false,
            }),
            await userRole.upsert({ 
                name: 'Maintenance Manager', 
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
                
            }),
            await userRole.upsert({ 
                name: 'Maintenance Worker', 
                defaultCanEdit: false,
                defaultCanArchive: false,
                defaultCanActivate: false,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
                name: 'IT Manager', 
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
            name: 'IT Worker', 
            defaultCanEdit: false,
            defaultCanArchive: false,
            defaultCanActivate: false,
            defaultCanDelete: false, }),
            await userRole.upsert({ 
                name: 'Support Central Manager', 
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
                name: 'Support Central Worker',
                defaultCanEdit: false,
                defaultCanArchive: false,
                defaultCanActivate: false,
                defaultCanDelete: false,
             }),
        ])

        console.log("User Role initialized successfully")
    }
    catch (error) {
        console.log("Initialization failed:", error)
    }
}

module.exports = { initializeUserRole }
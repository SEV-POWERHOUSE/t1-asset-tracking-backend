const db = require("../models");
const userRole = db.userRole;


async function initializeUserRole() {
    try {

        await Promise.all([
            await userRole.upsert({ 
                name: 'Admin',
                defaultCanAdd: true,
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: true,
            }),
            await userRole.upsert({ 
                name: 'Unassigned',
                defaultCanAdd: false,
                defaultCanEdit: false,
                defaultCanArchive: false,
                defaultCanActivate: false,
                defaultCanDelete: false,
            }),
            await userRole.upsert({ 
                name: 'Maintenance Manager', 
                defaultCanAdd: true,
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
                
            }),
            await userRole.upsert({ 
                name: 'Maintenance Worker', 
                defaultCanAdd: false,
                defaultCanEdit: false,
                defaultCanArchive: false,
                defaultCanActivate: false,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
                name: 'IT Manager', 
                defaultCanAdd: true,
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
            name: 'IT Worker', 
            defaultCanAdd: false,
            defaultCanEdit: false,
            defaultCanArchive: false,
            defaultCanActivate: false,
            defaultCanDelete: false, }),
            await userRole.upsert({ 
                name: 'Support Central Manager', 
                defaultCanAdd: true,
                defaultCanEdit: true,
                defaultCanArchive: true,
                defaultCanActivate: true,
                defaultCanDelete: false,
             }),
            await userRole.upsert({ 
                name: 'Support Central Worker',
                defaultCanAdd: false,
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
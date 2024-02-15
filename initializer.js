const { initializeUserGroup } = require("./app/scripts/userGroupInit")
const { initializeUser } = require("./app/scripts/userInit")
const db = require("./app/models")
const dbConfig = require("./app/config/db.config")

db.sequelize.authenticate()
.then(() => {
    console.log("Database connection successful")
    // Run userGroupInit script
    initializeUserGroup()
    // Run userInit script
    initializeUser()
})
.catch(error => {
    console.log("Database connection error:", error)
})

console.log("Database configuration:", dbConfig)

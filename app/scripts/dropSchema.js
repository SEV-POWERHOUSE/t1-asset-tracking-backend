const db = require("../models")

async function dropSchema() {
    try {

        db.sequelize.drop() 
        console.log("Tables dropped")

        // await db.sequelize.createSchema(process.env.DB_NAME)
        // console.log("Schema created")
    } catch (error){
        console.log("Error dropping tables:", error) 
    }
}

module.exports = { dropSchema }
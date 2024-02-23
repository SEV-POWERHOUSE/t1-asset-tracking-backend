require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const { initializeUserRole } = require("./app/scripts/userRoleInit")
const { initializeUser } = require("./app/scripts/userInit")
const { initializeAssetCategory} = require("./app/scripts/assetCategoryInit")
const { initializeAssetType} = require("./app/scripts/assetTypeInit")
const { initializeAssetProfile} = require("./app/scripts/assetProfileInit")
const { initializeBuildings } = require("./app/scripts/buildingInit");
const { initializeRooms } = require("./app/scripts/roomInit");
const { dropSchema } = require("./app/scripts/dropSchema")



// Utility drop statement. #remove after testing#
// try {
//   // drop schema before insert
//   dropSchema()

//   console.log("schema dropped and recreate")

// } catch (error) {
//   console.log("Error:", error)
// }

var corsOptions = {
  origin: ["http://localhost:8081", "https://asset.eaglesoftwareteam.com"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable pre-flight for all routes

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



db.sequelize.sync()
  .then(async () => {
    console.log('Database synchronized successfully.');

    // Await the completion of each initialization method before proceeding to the next
    await initializeUserRole();
    await initializeUser();
    await initializeAssetCategory();
    await initializeAssetType();
    await initializeAssetProfile();
    await initializeBuildings();
    await initializeRooms();

    console.log('All initializations completed successfully.');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
    process.exit(1);
  });

// API routes 
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/userRole.routes")(app);
require("./app/routes/assetCategory.routes")(app);
require("./app/routes/assetType.routes")(app);
require("./app/routes/assetProfile.routes")(app);
require("./app/routes/profileData.routes")(app);
require("./app/routes/serializedAsset.routes")(app);
require("./app/routes/lease.routes")(app);
require("./app/routes/warranty.routes")(app);
require("./app/routes/service.routes")(app);
require("./app/routes/person.routes")(app);
require("./app/routes/personAsset.routes")(app);
require("./app/routes/logType.routes")(app);
require("./app/routes/log.routes")(app);
require("./app/routes/barcode.routes")(app);
require("./app/routes/building.routes")(app);
require("./app/routes/room.routes")(app);
require("./app/routes/buildingAsset.routes")(app);
require("./app/routes/roomAsset.routes")(app);
//require("./app/routes/email.routes")(app);



// Simple route
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Set port, listen for requests
const PORT = process.env.PORT || 3031;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;

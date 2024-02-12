require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  origin: ["http://localhost:8081", "https://asset.eaglesoftwareteam.com"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable pre-flight for all routes

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// API routes 
require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/userGroup.routes")(app);
require("./app/routes/assetCat.routes")(app);
require("./app/routes/assetType.routes")(app);
require("./app/routes/assetProfile.routes.js")(app);

// require("./app/routes/barcode.routes")(app);
// require("./app/routes/building.routes")(app);
// require("./app/routes/buildingAsset.routes")(app);
//require("./app/routes/email.routes")(app);
// require("./app/routes/lease.routes")(app);
// require("./app/routes/log.routes")(app);
// require("./app/routes/logType.routes")(app);
// require("./app/routes/personAsset.routes")(app);
// require("./app/routes/person.routes")(app);
// require("./app/routes/profileData.routes")(app);
// require("./app/routes/room.routes")(app);
// require("./app/routes/roomAsset.routes")(app);
// require("./app/routes/serializedAsset.routes")(app);
// require("./app/routes/service.routes")(app);
// require("./app/routes/warranty.routes")(app);

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

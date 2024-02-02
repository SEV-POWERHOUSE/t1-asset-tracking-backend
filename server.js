require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

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

// require("./app/routes/email.routes")(app);

// Simple route
app.get("/", (req, res) => {
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

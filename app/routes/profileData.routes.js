module.exports = (app) => {
    const profileData = require("../controllers/profileData.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new ProfileData
    router.post("/", [authenticate], profileData.createProfileData);
  
    // Retrieve all ProfileData
    router.get("/", [authenticate], profileData.getAllProfileData);
  
    // Retrieve a single ProfileData by profileId
    router.get("/:profileId", [authenticate], profileData.getProfileDataById);
  
    // Update a ProfileData by profileId
    router.put("/:profileId", [authenticate], profileData.updateProfileData);
  
    // Delete a ProfileData by profileId
    router.delete("/:profileId", [authenticate], profileData.deleteProfileData);
  
    // Delete all ProfileData
    router.delete("/", [authenticate], profileData.deleteAllProfileData);
  
    app.use("/asset-t1/profileData", router);
  };
  
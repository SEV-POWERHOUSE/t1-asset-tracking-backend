const db = require("../models");
const ProfileData = db.profileData;
const Op = db.Sequelize.Op;

// Create and Save a new ProfileData
exports.createProfileData = (req, res) => {
  
  // Validate request
  if ( !req.body.field || !req.body.data || !req.body.profileId) {
    console.log("Received request body:", req.body)
    res.status(400).send({
      message: `Content can not be empty!  Field: ${field}, Data: ${data}, Profile ID: ${ProfileId}`,
    });
    return;
  }

  // Create a ProfileData
  const profileData = {
    field: req.body.field,
    data: req.body.data || null,
    profileId: req.body.profileId,
  };

  // Save ProfileData in the database
  ProfileData.create(profileData)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the ProfileData.",
      });
    });
};

// Retrieve all ProfileData from the database.
exports.getAllProfileData = (req, res) => {
  ProfileData.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving profile data.",
      });
    });
};

// Find a single ProfileData with a profileId
exports.getProfileDataById = (req, res) => {
  const profileId = req.params.profileId;

  ProfileData.findByPk(profileId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find ProfileData with profileId=${profileId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ProfileData with profileId=" + profileId,
      });
    });
};

// Update a ProfileData by the profileId in the request
exports.updateProfileData = (req, res) => {
  const profileId = req.params.profileId;

  ProfileData.update(req.body, {
    where: { profileId: profileId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "ProfileData was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update profile data with profileId=${profileId}. Maybe ProfileData was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProfileData with profileId=" + profileId,
      });
    });
};

// Delete a ProfileData with the specified profileId in the request
exports.deleteProfileData = (req, res) => {
  const profileId = req.params.profileId;

  ProfileData.destroy({
    where: { profileId: profileId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "ProfileData was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete profile data with profileId=${profileId}. Maybe ProfileData was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ProfileData with profileId=" + profileId,
      });
    });
};

// Delete all ProfileData from the database.
exports.deleteAllProfileData = (req, res) => {
  ProfileData.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send({ message: `${nums} ProfileData were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all profile data.",
      });
    });
};

const db = require("../models");
const AssetProfile = db.assetProfile;

// Create and Save a new AssetProfile
exports.createAssetProfile = (req, res) => {
  // Validate request
  if (!req.body.typeId) {
    // Removed profileId from validation
    res.status(400).send({
      message: "Content can not be empty! Type ID is required.",
    });
    return;
  }

  // Create an AssetProfile
  const assetProfile = {
    typeId: req.body.typeId,
    description: req.body.description || null,
    // profileData is not included in the model so it should not be in the creation logic
  };

  // Save AssetProfile in the database
  AssetProfile.create(assetProfile)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AssetProfile.",
      });
    });
};

// Retrieve all AssetProfiles from the database.
exports.getAllAssetProfiles = (req, res) => {
  AssetProfile.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving asset profiles.",
      });
    });
};

// Find a single AssetProfile with a profileId
exports.getAssetProfileById = (req, res) => {
  const profileId = req.params.profileId;

  AssetProfile.findByPk(profileId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetProfile with profileId=${profileId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving AssetProfile with profileId=" + profileId,
      });
    });
};

// Update an AssetProfile by the profileId in the request
exports.updateAssetProfile = (req, res) => {
  const profileId = req.params.profileId;

  AssetProfile.update(req.body, {
    where: { profileId: profileId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetProfile was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update asset profile with profileId=${profileId}. Maybe AssetProfile was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating AssetProfile with profileId=" + profileId,
      });
    });
};

// Delete an AssetProfile with the specified profileId in the request
exports.deleteAssetProfile = (req, res) => {
  const profileId = req.params.profileId;

  AssetProfile.destroy({
    where: { profileId: profileId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetProfile was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete asset profile with profileId=${profileId}. Maybe AssetProfile was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AssetProfile with profileId=" + profileId,
      });
    });
};

// Delete all AssetProfiles from the database.
exports.deleteAllAssetProfiles = (req, res) => {
  AssetProfile.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} AssetProfiles were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all asset profiles.",
      });
    });
};

const db = require("../models");
const AssetProfile = db.assetProfile;
const AssetType = db.assetType;

// Create and Save a new AssetProfile
exports.createAssetProfile = (req, res) => {
  // Validate request
  if (!req.body.typeId || !req.body.profileName) {
    res.status(400).send({
      message:
        "Content cannot be empty! Type ID and Profile Name are required.",
    });
    return;
  }

  // Create an AssetProfile
  const assetProfile = {
    profileName: req.body.profileName,
    typeId: req.body.typeId,
    desc: req.body.desc || null,
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
  AssetProfile.findAll({
    include: [
      {
        model: AssetType,
        as: "assetType", // Must match the alias defined in the association
        attributes: ["typeId", "typeName", "categoryId", "desc"], // Specify the attributes you want to include
      },
    ],
  })
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

  AssetProfile.findByPk(profileId, {
    include: [
      {
        model: AssetType,
        as: "assetType",
        attributes: ["typeId", "typeName", "categoryId", "desc"],
      },
    ],
  })
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
          message: `Cannot update AssetProfile with profileId=${profileId}. Maybe AssetProfile was not found or req.body is empty!`,
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

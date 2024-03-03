const db = require("../models");
const AssetProfile = db.assetProfile;
const SerializedAsset = db.serializedAsset;

// Create and Save a new SerializedAsset
exports.createSerializedAsset = (req, res) => {
  // Validate request for required fields
  if (!req.body.serializedNumber || !req.body.profileId || !req.body.notes) {
    res.status(400).send({
      message:
        "Content cannot be empty! Serialized number, profile ID, and notes are required.",
    });
    return;
  }

  // Prepare data to create a SerializedAsset
  const serializedAssetData = {
    serializedNumber: req.body.serializedNumber,
    profileId: req.body.profileId,
    notes: req.body.notes,
    activeStatus: req.body.activeStatus,
  };

  // Create a SerializedAsset in the database
  SerializedAsset.create(serializedAssetData)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the SerializedAsset.",
      });
    });
};

// Retrieve all SerializedAssets from the database.
exports.getAllSerializedAssets = (req, res) => {
  SerializedAsset.findAll({
    include: [
      {
        model: AssetProfile,
        as: "assetProfile",
        attributes: ["profileId", "profileName", "typeId", "desc"],
      },
    ],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving serialized assets.",
      });
    });
};

// Find a single SerializedAsset with a serializedAssetId
exports.getSerializedAssetById = (req, res) => {
  const serializedAssetId = req.params.serializedAssetId;

  SerializedAsset.findByPk(serializedAssetId, {
    include: [
      {
        model: AssetProfile,
        as: "assetProfile",
        attributes: ["profileId", "profileName", "typeId", "desc"],
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find SerializedAsset with serializedAssetId=${serializedAssetId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Error retrieving SerializedAsset with serializedAssetId=" +
          serializedAssetId,
      });
    });
};

// Update a SerializedAsset by the serializedAssetId in the request
exports.updateSerializedAsset = (req, res) => {
  const serializedAssetId = req.params.serializedAssetId;

  SerializedAsset.update(req.body, {
    where: { serializedAssetId: serializedAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "SerializedAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update SerializedAsset with serializedAssetId=${serializedAssetId}. Maybe SerializedAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Error updating SerializedAsset with serializedAssetId=" +
          serializedAssetId,
      });
    });
};

// Delete a SerializedAsset with the specified serializedAssetId in the request
exports.deleteSerializedAsset = (req, res) => {
  const serializedAssetId = req.params.serializedAssetId;

  SerializedAsset.destroy({
    where: { serializedAssetId: serializedAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "SerializedAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete SerializedAsset with serializedAssetId=${serializedAssetId}. Maybe it was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Could not delete SerializedAsset with serializedAssetId=" +
          serializedAssetId,
      });
    });
};

// Delete all SerializedAssets from the database.
exports.deleteAllSerializedAssets = (req, res) => {
  SerializedAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({
          message: `${nums} SerializedAssets were deleted successfully!`,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all serialized assets.",
      });
    });
};

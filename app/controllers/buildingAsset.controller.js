const db = require("../models");
const BuildingAsset = db.buildingAsset;
const Op = db.Sequelize.Op;

// Create and Save a new BuildingAsset
exports.createBuildingAsset = (req, res) => {
  // Validate request
  if (!req.body.buildingId || !req.body.serializedAssetId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a BuildingAsset
  const buildingAsset = {
    buildingId: req.body.buildingId,
    serializedAssetId: req.body.serializedAssetId,
  };

  // Save BuildingAsset in the database
  BuildingAsset.create(buildingAsset)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the BuildingAsset.",
      });
    });
};

// Retrieve all BuildingAssets from the database.
exports.getAllBuildingAssets = (req, res) => {
  BuildingAsset.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving building assets.",
      });
    });
};

// Find a single BuildingAsset with a buildingId
exports.getBuildingAssetById = (req, res) => {
  const buildingId = req.params.buildingId;

  BuildingAsset.findByPk(buildingId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find BuildingAsset with buildingId=${buildingId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving BuildingAsset with buildingId=" + buildingId,
      });
    });
};

// Update a BuildingAsset by the buildingId in the request
exports.updateBuildingAsset = (req, res) => {
  const buildingId = req.params.buildingId;

  BuildingAsset.update(req.body, {
    where: { buildingId: buildingId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "BuildingAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update building asset with buildingId=${buildingId}. Maybe BuildingAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating BuildingAsset with buildingId=" + buildingId,
      });
    });
};

// Delete a BuildingAsset with the specified buildingId in the request
exports.deleteBuildingAsset = (req, res) => {
  const buildingId = req.params.buildingId;

  BuildingAsset.destroy({
    where: { buildingId: buildingId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "BuildingAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete building asset with buildingId=${buildingId}. Maybe BuildingAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete BuildingAsset with buildingId=" + buildingId,
      });
    });
};

// Delete all BuildingAssets from the database.
exports.deleteAllBuildingAssets = (req, res) => {
  BuildingAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send({ message: `${nums} BuildingAssets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all building assets.",
      });
    });
};

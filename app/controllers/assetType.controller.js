const db = require("../models");
const AssetType = db.assetType;
const Op = db.Sequelize.Op;

// Create and Save a new AssetType
exports.createAssetType = (req, res) => {
  // Validate request
  if (!req.body.typeId || !req.body.typeName || !req.body.catId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an AssetType
  const assetType = {
    typeId: req.body.typeId,
    typeName: req.body.typeName,
    catId: req.body.catId,
  };

  // Save AssetType in the database
  AssetType.create(assetType)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the AssetType.",
      });
    });
};

// Retrieve all AssetTypes from the database.
exports.getAllAssetTypes = (req, res) => {
  AssetType.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving asset types.",
      });
    });
};

// Find a single AssetType with a typeId
exports.getAssetTypeById = (req, res) => {
  const typeId = req.params.typeId;

  AssetType.findByPk(typeId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetType with typeId=${typeId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving AssetType with typeId=" + typeId,
      });
    });
};

// Update an AssetType by the typeId in the request
exports.updateAssetType = (req, res) => {
  const typeId = req.params.typeId;

  AssetType.update(req.body, {
    where: { typeId: typeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetType was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update asset type with typeId=${typeId}. Maybe AssetType was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating AssetType with typeId=" + typeId,
      });
    });
};

// Delete an AssetType with the specified typeId in the request
exports.deleteAssetType = (req, res) => {
  const typeId = req.params.typeId;

  AssetType.destroy({
    where: { typeId: typeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetType was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete asset type with typeId=${typeId}. Maybe AssetType was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AssetType with typeId=" + typeId,
      });
    });
};

// Delete all AssetTypes from the database.
exports.deleteAllAssetTypes = (req, res) => {
  AssetType.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send({ message: `${nums} AssetTypes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all asset types.",
      });
    });
};

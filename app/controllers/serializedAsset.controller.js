const db = require("../models");
const SerialAsset = db.serialAsset;
const Op = db.Sequelize.Op;

// Create and Save a new SerialAsset
exports.createSerialAsset = (req, res) => {
  // Validate request
  if (!req.body.serialAssetId || !req.body.serialNumber) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a SerialAsset
  const serialAsset = {
    serialAssetId: req.body.serialAssetId,
    serialNumber: req.body.serialNumber,
  };

  // Save SerialAsset in the database
  SerialAsset.create(serialAsset)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the SerialAsset.",
      });
    });
};

// Retrieve all SerialAssets from the database.
exports.getAllSerialAssets = (req, res) => {
  SerialAsset.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving serial assets.",
      });
    });
};

// Find a single SerialAsset with a serialAssetId
exports.getSerialAssetById = (req, res) => {
  const serialAssetId = req.params.serialAssetId;

  SerialAsset.findByPk(serialAssetId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find SerialAsset with serialAssetId=${serialAssetId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving SerialAsset with serialAssetId=" + serialAssetId,
      });
    });
};

// Update a SerialAsset by the serialAssetId in the request
exports.updateSerialAsset = (req, res) => {
  const serialAssetId = req.params.serialAssetId;

  SerialAsset.update(req.body, {
    where: { serialAssetId: serialAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "SerialAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update serial asset with serialAssetId=${serialAssetId}. Maybe SerialAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating SerialAsset with serialAssetId=" + serialAssetId,
      });
    });
};

// Delete a SerialAsset with the specified serialAssetId in the request
exports.deleteSerialAsset = (req, res) => {
  const serialAssetId = req.params.serialAssetId;

  SerialAsset.destroy({
    where: { serialAssetId: serialAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "SerialAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete serial asset with serialAssetId=${serialAssetId}. Maybe SerialAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete SerialAsset with serialAssetId=" + serialAssetId,
      });
    });
};

// Delete all SerialAssets from the database.
exports.deleteAllSerialAssets = (req, res) => {
  SerialAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send({ message: `${nums} SerialAssets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all serial assets.",
      });
    });
};

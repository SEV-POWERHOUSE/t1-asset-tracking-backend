const db = require("../models");
const Barcode = db.barcode;
const Op = db.Sequelize.Op;

// Create and Save a new Barcode
exports.createBarcode = (req, res) => {
  // Validate request
  if (!req.body.barcodeId || !req.body.barcode || !req.body.serializedAssetId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Barcode
  const barcode = {
    barcodeId: req.body.barcodeId,
    barcode: req.body.barcode,
    serializedAssetId: req.body.serializedAssetId,
  };

  // Save Barcode in the database
  Barcode.create(barcode)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Barcode.",
      });
    });
};

// Retrieve all Barcodes from the database.
exports.getAllBarcodes = (req, res) => {
  Barcode.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving barcodes.",
      });
    });
};

// Find a single Barcode with a barcodeId
exports.getBarcodeById = (req, res) => {
  const barcodeId = req.params.barcodeId;

  Barcode.findByPk(barcodeId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find Barcode with barcodeId=${barcodeId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Barcode with barcodeId=" + barcodeId,
      });
    });
};

// Update a Barcode by the barcodeId in the request
exports.updateBarcode = (req, res) => {
  const barcodeId = req.params.barcodeId;

  Barcode.update(req.body, {
    where: { barcodeId: barcodeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Barcode was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update barcode with barcodeId=${barcodeId}. Maybe Barcode was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Barcode with barcodeId=" + barcodeId,
      });
    });
};

// Delete a Barcode with the specified barcodeId in the request
exports.deleteBarcode = (req, res) => {
  const barcodeId = req.params.barcodeId;

  Barcode.destroy({
    where: { barcodeId: barcodeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Barcode was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete barcode with barcodeId=${barcodeId}. Maybe Barcode was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Barcode with barcodeId=" + barcodeId,
      });
    });
};

// Delete all Barcodes from the database.
exports.deleteAllBarcodes = (req, res) => {
  Barcode.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Barcodes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all barcodes.",
      });
    });
};

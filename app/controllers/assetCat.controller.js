const db = require("../models");
const AssetCat = db.assetCat;

// Create and Save a new AssetCat
exports.createAssetCat = (req, res) => {
  // Validate request
  if (!req.body.catName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an AssetCat
  const assetCat = {
    catName: req.body.catName,
  };

  // Save AssetCat in the database
  AssetCat.create(assetCat)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AssetCat.",
      });
    });
};

// Retrieve all AssetCats from the database.
exports.getAllAssetCats = (req, res) => {
  AssetCat.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving asset categories.",
      });
    });
};

// Find a single AssetCat with a catId
exports.getAssetCatById = (req, res) => {
  const catId = req.params.catId;

  AssetCat.findByPk(catId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetCat with catId=${catId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving AssetCat with catId=" + catId,
      });
    });
};

// Update an AssetCat by the catId in the request
exports.updateAssetCat = (req, res) => {
  const catId = req.params.catId;

  AssetCat.update(req.body, {
    where: { catId: catId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetCat was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update asset category with catId=${catId}. Maybe AssetCat was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating AssetCat with catId=" + catId,
      });
    });
};

// Delete an AssetCat with the specified catId in the request
exports.deleteAssetCat = (req, res) => {
  const catId = req.params.catId;

  AssetCat.destroy({
    where: { catId: catId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetCat was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete asset category with catId=${catId}. Maybe AssetCat was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AssetCat with catId=" + catId,
      });
    });
};

// Delete all AssetCats from the database.
exports.deleteAllAssetCats = (req, res) => {
  AssetCat.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} AssetCats were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all asset categories.",
      });
    });
};

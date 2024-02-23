const db = require("../models");
const AssetType = db.assetType;
const AssetCategory = db.assetCategory;

// Create and Save a new AssetType
exports.createAssetType = (req, res) => {
  // Validate request
  if (!req.body.typeName || !req.body.categoryId) {
    res.status(400).send({
      message:
        "Content cannot be empty! Type name, desc, and category ID are required.",
    });
    return;
  }

  // Create an AssetType
  const assetType = {
    typeName: req.body.typeName,
    desc: req.body.desc,
    categoryId: req.body.categoryId,
  };

  // Save AssetType in the database
  AssetType.create(assetType)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AssetType.",
      });
    });
};

// Retrieve all AssetTypes from the database including their associated AssetCategory.
exports.getAllAssetTypes = (req, res) => {
  AssetType.findAll({
    include: [
      {
        model: AssetCategory, // Include the AssetCategory model in the query
        as: "assetCategory", // This alias must match the one defined in your association
        attributes: ["categoryId", "categoryName", "desc"], // Specify the attributes you want to include
      },
    ],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving asset types.",
      });
    });
};

// Find a single AssetType with a typeId
exports.getAssetTypeById = (req, res) => {
  const typeId = req.params.typeId;

  AssetType.findByPk(typeId, {
    include: [
      {
        model: AssetCategory,
        as: "assetCategory", // Ensure this alias matches the one defined in your associations
        attributes: ["categoryId", "categoryName", "desc"], // Adjust attributes as needed
      },
    ],
  })
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
      res
        .status(200)
        .send({ message: `${nums} AssetTypes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all asset types.",
      });
    });
};

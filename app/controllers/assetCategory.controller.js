const db = require("../models");
const AssetCategory = db.assetCategory;

// Create and Save a new AssetCategory
exports.createAssetCategory = (req, res) => {
  // Validate request
  if (!req.body.categoryName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an AssetCategory
  const assetCategory = {
    categoryId: req.body.categoryId,
    categoryName: req.body.categoryName,
    desc: req.body.desc,
  };

  // Save AssetCategory in the database
  AssetCategory.create(assetCategory)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AssetCategory.",
      });
    });
};

// Retrieve all AssetCategories from the database.
exports.getAllAssetCategories = (req, res) => {
  AssetCategory.findAll()
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

// In your assetCategory.controller.js
exports.getCategoryByName = (req, res) => {
  if (!req.query.categoryName) {
    return res.status(400).send({
      message: "Category name query parameter is required",
    });
  }

  AssetCategory.findOne({
    where: {
      categoryName: req.query.categoryName
    }
  })
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: `Asset Category with name ${req.query.categoryName} not found.`,
        });
      }
      res.status(200).json(category);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Asset Category with name ${req.query.categoryName}.`,
      });
    });
};

// Find a single AssetCategory with a categoryId
exports.getAssetCategoryById = (req, res) => {
  const categoryId = req.params.categoryId;

  AssetCategory.findByPk(categoryId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetCategory with categoryId=${categoryId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving AssetCategory with categoryId=" + categoryId,
      });
    });
};

// Update an AssetCategory by the categoryId in the request
exports.updateAssetCategory = (req, res) => {
  const categoryId = req.params.categoryId;

  AssetCategory.update(req.body, {
    where: { categoryId: categoryId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetCategory was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update asset category with categoryId=${categoryId}. Maybe AssetCategory was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating AssetCategory with categoryId=" + categoryId,
      });
    });
};

// Delete an AssetCategory with the specified categoryId in the request
exports.deleteAssetCategory = (req, res) => {
  const categoryId = req.params.categoryId;

  AssetCategory.destroy({
    where: { categoryId: categoryId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "AssetCategory was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete asset category with categoryId=${categoryId}. Maybe AssetCategory was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AssetCategory with categoryId=" + categoryId,
      });
    });
};

// Delete all AssetCategories from the database.
exports.deleteAllAssetCategories = (req, res) => {
  AssetCategory.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} AssetCategories were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all asset categories.",
      });
    });
};

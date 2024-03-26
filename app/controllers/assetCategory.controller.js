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
    activeStatus: req.body.activeStatus,
  };

  // Save AssetCategory in the database
  AssetCategory.create(assetCategory)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the AssetCategory.",
      });
    });
};

// Bulk create assetCategories from tsv
exports.bulkCreateAssetCategory = (req, res) => {
  // tsv will be read in as hex values
  // convert function that takes hex => utf8 characters
  const convert = function (tsvFile) {
    const convert = (from, to) => (str) => Buffer.from(str, from).toString(to);
    const hexToUtf8 = convert("hex", "utf8");
    let tsvData = hexToUtf8(tsvFile.data).split("\r\n");
    console.log(tsvData);
    let tsvRows = [];
    tsvData.forEach((data) => {
      tsvRows.push(data.split("\t"));
    });
    let data = [];
    for (let i = 1; i < tsvRows.length; ++i) {
      let dict = {};
      for (let j = 0; j < tsvRows[i].length; ++j) {
        dict[tsvRows[0][j]] = tsvRows[i][j];
      }
      data.push(dict);
    }
    return data;
  };

  if (!req.files || !req.files.file) {
    res.status(404).send("File not found");
    return;
  }

  if (req.files.file.mimetype !== "text/tab-separated-values") {
    res.status(422).send(
      util.apiResponse(0, toast.INVALID_FILE_FORMAT, {
        err: "File format is not valid",
      })
    );
    return;
  }

  const tsvFile = req.files.file;
  data = convert(tsvFile); // pass tsv file to be converted
  console.log(data);

  AssetCategory.bulkCreate(data)
    .then((categories) => {
      res.status(201).json(categories);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while bulk creating the AssetCategories.",
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
      categoryName: req.query.categoryName,
    },
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
        .send({
          message: `${nums} AssetCategories were deleted successfully!`,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all asset categories.",
      });
    });
};

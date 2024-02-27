module.exports = (app) => {
  const assetCategory = require("../controllers/assetCategory.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  const router = require("express").Router();

  // Create a new AssetCategory
  router.post("/", [authenticate], assetCategory.createAssetCategory);

  // Bulk create from csv
  router.post("/send/file", [authenticate], assetCategory.bulkCreateAssetCategory)

  // Retrieve all AssetCategories
  router.get("/", [authenticate], assetCategory.getAllAssetCategories);

  // New route for retrieving an AssetCategory by name
  router.get("/byName", [authenticate], assetCategory.getCategoryByName);

  // Retrieve a single AssetCategory with categoryId
  router.get("/:categoryId", [authenticate], assetCategory.getAssetCategoryById);

  // Update an AssetCategory with categoryId
  router.put("/:categoryId", [authenticate], assetCategory.updateAssetCategory);

  // Delete an AssetCategory with categoryId
  router.delete("/:categoryId", [authenticate], assetCategory.deleteAssetCategory);

  // Delete all AssetCategories
  router.delete("/", [authenticate], assetCategory.deleteAllAssetCategories);

  app.use("/asset-t1/assetCategory", router);
};
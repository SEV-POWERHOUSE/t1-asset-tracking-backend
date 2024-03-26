const db = require("../models");
const assetCategory = db.assetCategory;

async function initializeAssetCategory() {
  const categories = [
    {
      categoryId: 1,
      categoryName: "Information Technology (IT)",
      desc: "This category comprises assets that are handled by the university's IT department",
      activeStatus: 1,
    },
    {
      categoryId: 2,
      categoryName: "Support Central",
      desc: "This category comprises assets that are handled by Support Central",
      activeStatus: 1,
    },
    {
      categoryId: 3,
      categoryName: "Maintenance",
      desc: "This category comprises assets that are handled by the university's maintenance department",
      activeStatus: 1,
    },
  ];

  try {
    await Promise.all(
      categories.map((category) => assetCategory.upsert(category))
    );
    console.log("Asset Categories initialized successfully, including an 'Inactive' category for Fixed-line Telecommunications.");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetCategory };

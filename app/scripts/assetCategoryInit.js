const db = require("../models");
const assetCategory = db.assetCategory;

async function initializeAssetCategory() {
  try {
    await Promise.all([
      await assetCategory.upsert({
        categoryName: "Devices",
        desc: "This category encompasses all portable electronic equipment that can be used for work or personal tasks. Examples include smartphones, laptops, tablets, and peripherals like keyboards and mice.",
      }),
      await assetCategory.upsert({
        categoryName: "Infrastructure",
        desc: "This category includes assets that are part of the underlying framework of technology systems. It covers network equipment (routers, switches), servers, storage devices, and backup systems.",
      }),
      await assetCategory.upsert({
        categoryName: "Facility",
        desc: "Assets under this category involve physical or tangible assets used in the maintenance and operations of a physical space. This includes security systems, HVAC systems, lighting, and furniture.",
      }),
    ]);

    console.log("Asset Category initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetCategory };

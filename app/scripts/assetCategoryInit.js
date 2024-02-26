const db = require("../models");
const assetCategory = db.assetCategory;

async function initializeAssetCategory() {
  const categories = [
    {
      categoryName: "Devices",
      desc: "This category encompasses all portable electronic equipment that can be used for work or personal tasks. Examples include smartphones, laptops, tablets, and peripherals like keyboards and mice.",
    },
    {
      categoryName: "Facility",
      desc: "This category includes assets that are part of the college's buildings and grounds. Examples include HVAC systems, projectors, furniture, and security systems.",
    },
    {
      categoryName: "Infrastructure",
      desc: "This category comprises assets that support the college's operations but are not directly used by individuals. Examples include networking equipment, servers, and backup power supplies.",
    },
    {
      categoryName: "Computing Hardware",
      desc: "This category includes desktop computers, servers, printers, and other peripherals not classified as portable devices. It focuses on equipment that supports the IT infrastructure and user computing needs.",
    },
    {
      categoryName: "Audiovisual Equipment",
      desc: "Comprises equipment used for the presentation and dissemination of audio and visual content. Examples include speakers, microphones, cameras, and video conferencing systems.",
    },
  ];

  try {
    await Promise.all(
      categories.map((category) => assetCategory.upsert(category))
    );
    console.log("Asset Categories initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetCategory };

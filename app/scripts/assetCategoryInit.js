const db = require("../models");
const assetCategory = db.assetCategory;

async function initializeAssetCategory() {
  const categories = [
    {
      categoryId: 1,
      categoryName: "Devices",
      desc: "This category encompasses all portable electronic equipment that can be used for work or personal tasks. Examples include smartphones, laptops, tablets, and peripherals like keyboards and mice.",
      activeStatus: 1,
    },
    {
      categoryId: 2,
      categoryName: "Facility",
      desc: "This category includes assets that are part of the college's buildings and grounds. Examples include HVAC systems, projectors, furniture, and security systems.",
      activeStatus: 1,
    },
    {
      categoryId: 3,
      categoryName: "Infrastructure",
      desc: "This category comprises assets that support the college's operations but are not directly used by individuals. Examples include networking equipment, servers, and backup power supplies.",
      activeStatus: 1,
    },
    {
      categoryId: 4,
      categoryName: "Computing Hardware",
      desc: "This category includes desktop computers, servers, printers, and other peripherals not classified as portable devices. It focuses on equipment that supports the IT infrastructure and user computing needs.",
      activeStatus: 1,
    },
    {
      categoryId: 5,
      categoryName: "Audiovisual Equipment",
      desc: "Comprises equipment used for the presentation and dissemination of audio and visual content. Examples include speakers, microphones, cameras, and video conferencing systems.",
      activeStatus: 1,
    },
    {
      categoryId: 6,
      categoryName: "Fixed-line Telecommunications",
      desc: "This category includes traditional telephony systems and infrastructure, such as landline phones and fax machines, which have become less relevant with the advent of mobile and VoIP technologies.",
      activeStatus: 0, // Set to inactive as it's no longer actively used in many modern settings
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

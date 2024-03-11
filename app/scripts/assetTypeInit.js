const db = require("../models");
const assetType = db.assetType;

async function initializeAssetType() {
  const types = [
    {
      typeId: 1,
      typeName: "Smartphone",
      categoryId: 1,
      desc: "Handheld communication devices that offer advanced computing abilities.",
      activeStatus: 1,
    },
    {
      typeId: 2,
      typeName: "Laptop",
      categoryId: 1,
      desc: "Portable personal computers with integrated keyboards and screens.",
      activeStatus: 1,
    },
    {
      typeId: 3,
      typeName: "Tablet",
      categoryId: 1,
      desc: "Portable computing devices with touchscreen interfaces.",
      activeStatus: 1,
    },
    {
      typeId: 4,
      typeName: "HVAC System",
      categoryId: 2,
      desc: "Heating, ventilation, and air conditioning units for climate control.",
      activeStatus: 1,
    },
    {
      typeId: 5,
      typeName: "Projector",
      categoryId: 2,
      desc: "Devices that project images or videos onto surfaces.",
      activeStatus: 1,
    },
    {
      typeId: 6,
      typeName: "Network Switch",
      categoryId: 3,
      desc: "Networking devices that connect multiple devices together on a computer network.",
      activeStatus: 1,
    },
    {
      typeId: 7,
      typeName: "Server",
      categoryId: 3,
      desc: "Computers designed to process requests and deliver data to other computers over a local network or the internet.",
      activeStatus: 1,
    },
    {
      typeId: 8,
      typeName: "Desktop Computer",
      categoryId: 4,
      desc: "Personal computers designed for regular use at a single location.",
      activeStatus: 1,
    },
    {
      typeId: 9,
      typeName: "Printer",
      categoryId: 4,
      desc: "Devices that produce a hard copy of documents stored on a computer or other device.",
      activeStatus: 1,
    },
    {
      typeId: 10,
      typeName: "Microphone",
      categoryId: 5,
      desc: "Devices that convert sound into electrical signals for recording or amplification.",
      activeStatus: 1,
    },
    {
      typeId: 11,
      typeName: "Camera",
      categoryId: 5,
      desc: "Devices used to capture images or videos.",
      activeStatus: 1,
    },
    {
      typeId: 12,
      typeName: "Video Conferencing System",
      categoryId: 5,
      desc: "Equipment used to conduct video communication sessions between two or more locations.",
      activeStatus: 1,
    },
    {
      typeId: 13,
      typeName: "Landline Phone",
      categoryId: 6,
      desc: "Traditional wired telephone systems for voice communication.",
      activeStatus: 0, // Marked as inactive
    },
    {
      typeId: 14,
      typeName: "Fax Machine",
      categoryId: 6,
      desc: "Devices used to send and receive documents over telephone lines.",
      activeStatus: 0, // Marked as inactive
    },
  ];

  try {
    await Promise.all(types.map((type) => assetType.upsert({...type})));
    console.log("Asset Types initialized successfully, including inactive types for 'Fixed-line Telecommunications'.");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetType };
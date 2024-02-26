const db = require("../models");
const assetType = db.assetType;

async function initializeAssetType() {
  const types = [
    {
      typeName: "Smartphone",
      categoryId: 1,
      desc: "Handheld communication devices that offer advanced computing abilities.",
    },
    {
      typeName: "Laptop",
      categoryId: 1,
      desc: "Portable personal computers with integrated keyboards and screens.",
    },
    {
      typeName: "Tablet",
      categoryId: 1,
      desc: "Portable computing devices with touchscreen interfaces.",
    },
    {
      typeName: "HVAC System",
      categoryId: 2,
      desc: "Heating, ventilation, and air conditioning units for climate control.",
    },
    {
      typeName: "Projector",
      categoryId: 2,
      desc: "Devices that project images or videos onto surfaces.",
    },
    {
      typeName: "Network Switch",
      categoryId: 3,
      desc: "Networking devices that connect multiple devices together on a computer network.",
    },
    {
      typeName: "Server",
      categoryId: 3,
      desc: "Computers designed to process requests and deliver data to other computers over a local network or the internet.",
    },
    {
      typeName: "Desktop Computer",
      categoryId: 4,
      desc: "Personal computers designed for regular use at a single location.",
    },
    {
      typeName: "Printer",
      categoryId: 4,
      desc: "Devices that produce a hard copy of documents stored on a computer or other device.",
    },
    {
      typeName: "Microphone",
      categoryId: 5,
      desc: "Devices that convert sound into electrical signals for recording or amplification.",
    },
    {
      typeName: "Camera",
      categoryId: 5,
      desc: "Devices used to capture images or videos.",
    },
    {
      typeName: "Video Conferencing System",
      categoryId: 5,
      desc: "Equipment used to conduct video communication sessions between two or more locations.",
    },
  ];

  try {
    await Promise.all(types.map((type) => assetType.upsert(type)));
    console.log("Asset Types initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetType };

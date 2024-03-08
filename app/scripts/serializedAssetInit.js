const db = require("../models");
const serializedAsset = db.serializedAsset;

async function initializeSerializedAssets() {
  const serializedAssets = [
    {
      serialNumber: "100002",
      profileId: 1,
      notes: "Apple smartphone with A15 Bionic chip.",
      activeStatus: 1,
    },
    {
        serialNumber: "100003",
      profileId: 1,
      notes: "Android smartphone with high-resolution camera.",
      activeStatus: 1,
    },
    {
        serialNumber: "100004",
      profileId: 2,
      notes: "High-performance laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
        serialNumber: "100005",
      profileId: 2,
      notes: "Apple laptop with M1 Pro chip.",
      activeStatus: 1,
    },
    {
        serialNumber: "100006",
      profileId: 3,
      notes: "Apple tablet with Liquid Retina display.",
      activeStatus: 1,
    },
    {
        serialNumber: "100007",
      profileId: 2,
      notes: "Ultralight business laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
        serialNumber: "100008",
      profileId: 11,
      notes: "Professional mirrorless camera.",
      activeStatus: 1,
    },
    {
        serialNumber: "100009",
      profileId: 11,
      notes: "Full-frame mirrorless camera with advanced autofocus.",
      activeStatus: 1,
    },
    {
        serialNumber: "100010",
      profileId: 12,
      notes: "Video conferencing bar with 4K support.",
      activeStatus: 1,
    },
    {
        serialNumber: "100011",
      profileId: 1,
      notes: "Android smartphone with Google Tensor processor.",
      activeStatus: 1,
    },
    {
        serialNumber: "100012",
      profileId: 2,
      notes: "Convertible laptop with touch screen and pen support.",
      activeStatus: 1,
    },
    {
        serialNumber: "100013",
      profileId: 3,
      notes: "Windows tablet with detachable keyboard.",
      activeStatus: 1,
    },
    {
        serialNumber: "100014",
      profileId: 9,
      notes: "Wi-Fi All-in-One Ink Tank Printer.",
      activeStatus: 1,
    },
    {
        serialNumber: "100015",
      profileId: 11,
      notes: "Webcam for HD video streaming.",
      activeStatus: 1,
    },
    {
        serialNumber: "100016",
      profileId: 5,
      notes: "Wireless noise-cancelling headphones.",
      activeStatus: 1,
    },
    {
        serialNumber: "100017",
      profileId: 7,
      notes: "Wi-Fi router for high-speed internet.",
      activeStatus: 1,
    },
    {
        serialNumber: "100018",
      profileId: 7,
      notes: "Managed PoE+ Gigabit Switch with SFP.",
      activeStatus: 1,
    },
    {
        serialNumber: "100019",
      profileId: 8,
      notes: "Server tower with Intel Xeon processor.",
      activeStatus: 1,
    },
    {
        serialNumber: "100020",
      profileId: 10,
      notes: "Active loudspeaker for live sound reinforcement.",
      activeStatus: 1,
    },
    {
      serialNumber: "100001",
      profileId: 18,
      notes: "Standard landline phone model XYZ, no longer in active use.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serialNumber: "100002",
      profileId: 18,
      notes: "Standard landline phone model XYZ, no longer in active use.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serialNumber: "100001",
      profileId: 19,
      notes: "Basic fax machine model ABC, phased out due to digital alternatives.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serialNumber: "100002",
      profileId: 19,
      notes: "Basic fax machine model ABC, phased out due to digital alternatives.",
      activeStatus: 0, // Explicitly marked as inactive
    },
  ];

  try {
    await Promise.all(serializedAssets.map((serialAsset) => serializedAsset.upsert(serialAsset)));
    console.log("Serialized Assets initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeSerializedAssets };

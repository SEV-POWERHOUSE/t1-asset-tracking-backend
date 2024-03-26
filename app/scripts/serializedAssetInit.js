const db = require("../models");
const serializedAsset = db.serializedAsset;

async function initializeSerializedAssets() {
  const serializedAssets = [
    {
      serializedAssetId: 1,
      serialNumber: "100002",
      profileId: 1,
      notes: "Apple smartphone with A15 Bionic chip.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 2,
      serialNumber: "100003",
      profileId: 1,
      notes: "Apple smartphone with A15 Bionic chip.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 3,
      serialNumber: "100004",
      profileId: 2,
      notes: "Android smartphone with high-resolution camera.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 4,
      serialNumber: "100005",
      profileId: 2,
      notes: "Android smartphone with high-resolution camera.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 5,
      serialNumber: "100005",
      profileId: 3,
      notes: "High-performance laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 6,
      serialNumber: "100006",
      profileId: 3,
      notes: "High-performance laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 7,
      serialNumber: "100007",
      profileId: 4,
      notes: "Apple laptop with M1 Pro chip.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 8,
      serialNumber: "100008",
      profileId: 4,
      notes: "Apple laptop with M1 Pro chip.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 9,
      serialNumber: "100009",
      profileId: 11,
      notes: "Convertible laptop with touch screen and pen support.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 10,
      serialNumber: "100010",
      profileId: 12,
      notes: "Windows tablet with detachable keyboard.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 11,
      serialNumber: "100011",
      profileId: 1,
      notes: "Apple smartphone with A15 Bionic chip.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 12,
      serialNumber: "100012",
      profileId: 2,
      notes: "Android smartphone with high-resolution camera.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 13,
      serialNumber: "100013",
      profileId: 3,
      notes: "High-performance laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 14,
      serialNumber: "100014",
      profileId: 9,
      notes: "Video conferencing bar with 4K support.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 15,
      serialNumber: "100015",
      profileId: 11,
      notes: "Convertible laptop with touch screen and pen support.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 16,
      serialNumber: "100016",
      profileId: 5,
      notes: "Apple tablet with Liquid Retina display.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 17,
      serialNumber: "100017",
      profileId: 7,
      notes: "Professional mirrorless camera.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 18,
      serialNumber: "100018",
      profileId: 7,
      notes: "Professional mirrorless camera.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 19,
      serialNumber: "100019",
      profileId: 8,
      notes: "Full-frame mirrorless camera with advanced autofocus.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 20,
      serialNumber: "100020",
      profileId: 10,
      notes: "Android smartphone with Google Tensor processor.",
      activeStatus: 1,
    },
    {
      serializedAssetId: 21,
      serialNumber: "100001",
      profileId: 18,
      notes: "Server tower with Intel Xeon processor.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serializedAssetId: 22,
      serialNumber: "100002",
      profileId: 18,
      notes: "Server tower with Intel Xeon processor.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serializedAssetId: 23,
      serialNumber: "100001",
      profileId: 19,
      notes: "Active loudspeaker for live sound reinforcement.",
      activeStatus: 0, // Explicitly marked as inactive
    },
    {
      serializedAssetId: 24,
      serialNumber: "100002",
      profileId: 19,
      notes: "Active loudspeaker for live sound reinforcement.",
      activeStatus: 0, // Explicitly marked as inactive
    },
  ];

  try {
    await Promise.all(
      serializedAssets.map((serialAsset) => serializedAsset.upsert({...serialAsset}))
    );
    console.log("Serialized Assets initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeSerializedAssets };

const db = require("../models");
const serializedAsset = db.serializedAsset;

async function initializeSerializedAssets() {
  const serializedAssets = [
    {
      serializedNumber: "100002",
      profileId: 1,
      notes: "Apple smartphone with A15 Bionic chip.",
    },
    {
        serializedNumber: "100003",
      profileId: 1,
      notes: "Android smartphone with high-resolution camera.",
    },
    {
        serializedNumber: "100004",
      profileId: 2,
      notes: "High-performance laptop with Intel Core i7 processor.",
    },
    {
        serializedNumber: "100005",
      profileId: 2,
      notes: "Apple laptop with M1 Pro chip.",
    },
    {
        serializedNumber: "100006",
      profileId: 3,
      notes: "Apple tablet with Liquid Retina display.",
    },
    {
        serializedNumber: "100007",
      profileId: 2,
      notes: "Ultralight business laptop with Intel Core i7 processor.",
    },
    {
        serializedNumber: "100008",
      profileId: 11,
      notes: "Professional mirrorless camera.",
    },
    {
        serializedNumber: "100009",
      profileId: 11,
      notes: "Full-frame mirrorless camera with advanced autofocus.",
    },
    {
        serializedNumber: "100010",
      profileId: 12,
      notes: "Video conferencing bar with 4K support.",
    },
    {
        serializedNumber: "100011",
      profileId: 1,
      notes: "Android smartphone with Google Tensor processor.",
    },
    {
        serializedNumber: "100012",
      profileId: 2,
      notes: "Convertible laptop with touch screen and pen support.",
    },
    {
        serializedNumber: "100013",
      profileId: 3,
      notes: "Windows tablet with detachable keyboard.",
    },
    {
        serializedNumber: "100014",
      profileId: 9,
      notes: "Wi-Fi All-in-One Ink Tank Printer.",
    },
    {
        serializedNumber: "100015",
      profileId: 11,
      notes: "Webcam for HD video streaming.",
    },
    {
        serializedNumber: "100016",
      profileId: 5,
      notes: "Wireless noise-cancelling headphones.",
    },
    {
        serializedNumber: "100017",
      profileId: 7,
      notes: "Wi-Fi router for high-speed internet.",
    },
    {
        serializedNumber: "100018",
      profileId: 7,
      notes: "Managed PoE+ Gigabit Switch with SFP.",
    },
    {
        serializedNumber: "100019",
      profileId: 8,
      notes: "Server tower with Intel Xeon processor.",
    },
    {
        serializedNumber: "100020",
      profileId: 10,
      notes: "Active loudspeaker for live sound reinforcement.",
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

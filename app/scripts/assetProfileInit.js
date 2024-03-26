const db = require("../models");
const assetProfile = db.assetProfile;

async function initializeAssetProfile() {
  const profiles = [
    {
      profileId: 1,
      profileName: "iPhone 13",
      typeId: 1,
      desc: "Apple smartphone with A15 Bionic chip.",
      activeStatus: 1,
    },
    {
      profileId: 2,
      profileName: "Samsung Galaxy S21",
      typeId: 1,
      desc: "Android smartphone with high-resolution camera.",
      activeStatus: 1,
    },
    {
      profileId: 3,
      profileName: "Dell XPS 15",
      typeId: 2,
      desc: "High-performance laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
      profileId: 4,
      profileName: 'MacBook Pro 16"',
      typeId: 2,
      desc: "Apple laptop with M1 Pro chip.",
      activeStatus: 1,
    },
    {
      profileId: 5,
      profileName: "iPad Pro",
      typeId: 3,
      desc: "Apple tablet with Liquid Retina display.",
      activeStatus: 1,
    },
    {
      profileId: 6,
      profileName: "Lenovo ThinkPad X1 Carbon",
      typeId: 2,
      desc: "Ultralight business laptop with Intel Core i7 processor.",
      activeStatus: 1,
    },
    {
      profileId: 7,
      profileName: "Canon EOS R5",
      typeId: 11,
      desc: "Professional mirrorless camera.",
      activeStatus: 1,
    },
    {
      profileId: 8,
      profileName: "Sony Alpha A7 III",
      typeId: 11,
      desc: "Full-frame mirrorless camera with advanced autofocus.",
      activeStatus: 1,
    },
    {
      profileId: 9,
      profileName: "Poly Studio X50",
      typeId: 12,
      desc: "Video conferencing bar with 4K support.",
      activeStatus: 1,
    },
    {
      profileId: 10,
      profileName: "Google Pixel 6",
      typeId: 1,
      desc: "Android smartphone with Google Tensor processor.",
      activeStatus: 1,
    },
    {
      profileId: 11,
      profileName: "HP Spectre x360",
      typeId: 2,
      desc: "Convertible laptop with touch screen and pen support.",
      activeStatus: 1,
    },
    {
      profileId: 12,
      profileName: "Microsoft Surface Pro 7",
      typeId: 3,
      desc: "Windows tablet with detachable keyboard.",
      activeStatus: 1,
    },
    {
      profileId: 13,
      profileName: "Epson EcoTank L3150",
      typeId: 9,
      desc: "Wi-Fi All-in-One Ink Tank Printer.",
      activeStatus: 1,
    },
    {
      profileId: 14,
      profileName: "Logitech C920 HD Pro",
      typeId: 11,
      desc: "Webcam for HD video streaming.",
      activeStatus: 1,
    },
    {
      profileId: 15,
      profileName: "Netgear Nighthawk R7000",
      typeId: 7,
      desc: "Wi-Fi router for high-speed internet.",
      activeStatus: 1,
    },
    {
      profileId: 16,
      profileName: "Ubiquiti UniFi Switch",
      typeId: 7,
      desc: "Managed PoE+ Gigabit Switch with SFP.",
      activeStatus: 1,
    },
    {
      profileId: 17,
      profileName: "Dell PowerEdge T40",
      typeId: 8,
      desc: "Server tower with Intel Xeon processor.",
      activeStatus: 1,
    },
    {
      profileId: 18,
      profileName: "Yamaha DXR8",
      typeId: 10,
      desc: "Active loudspeaker for live sound reinforcement.",
      activeStatus: 1,
    },
    {
      profileId: 19,
      profileName: "Generic Landline Phone",
      typeId: 13,
      desc: "Standard wired telephone used for voice communication in homes and offices.",
      activeStatus: 0, // Marked as inactive
    },
    {
      profileId: 20,
      profileName: "Basic Fax Machine",
      typeId: 14,
      desc: "Device for sending and receiving documents over telephone lines.",
      activeStatus: 0, // Marked as inactive
    },
  ];

  try {
    await Promise.all(profiles.map((profile) => assetProfile.upsert({...profile})));
    console.log("Asset Profiles initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetProfile };
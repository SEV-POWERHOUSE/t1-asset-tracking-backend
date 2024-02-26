const db = require("../models");
const assetProfile = db.assetProfile;

async function initializeAssetProfile() {
  const profiles = [
    {
      profileName: "iPhone 13",
      typeId: 1,
      desc: "Apple smartphone with A15 Bionic chip.",
    },
    {
      profileName: "Samsung Galaxy S21",
      typeId: 1,
      desc: "Android smartphone with high-resolution camera.",
    },
    {
      profileName: "Dell XPS 15",
      typeId: 2,
      desc: "High-performance laptop with Intel Core i7 processor.",
    },
    {
      profileName: 'MacBook Pro 16"',
      typeId: 2,
      desc: "Apple laptop with M1 Pro chip.",
    },
    {
      profileName: "iPad Pro",
      typeId: 3,
      desc: "Apple tablet with Liquid Retina display.",
    },
    {
      profileName: "Lenovo ThinkPad X1 Carbon",
      typeId: 2,
      desc: "Ultralight business laptop with Intel Core i7 processor.",
    },
    {
      profileName: "Canon EOS R5",
      typeId: 11,
      desc: "Professional mirrorless camera.",
    },
    {
      profileName: "Sony Alpha A7 III",
      typeId: 11,
      desc: "Full-frame mirrorless camera with advanced autofocus.",
    },
    {
      profileName: "Poly Studio X50",
      typeId: 12,
      desc: "Video conferencing bar with 4K support.",
    },
    {
      profileName: "Google Pixel 6",
      typeId: 1,
      desc: "Android smartphone with Google Tensor processor.",
    },
    {
      profileName: "HP Spectre x360",
      typeId: 2,
      desc: "Convertible laptop with touch screen and pen support.",
    },
    {
      profileName: "Microsoft Surface Pro 7",
      typeId: 3,
      desc: "Windows tablet with detachable keyboard.",
    },
    {
      profileName: "Epson EcoTank L3150",
      typeId: 9,
      desc: "Wi-Fi All-in-One Ink Tank Printer.",
    },
    {
      profileName: "Logitech C920 HD Pro",
      typeId: 11,
      desc: "Webcam for HD video streaming.",
    },
    {
      profileName: "Bose QuietComfort 35 II",
      typeId: 5,
      desc: "Wireless noise-cancelling headphones.",
    },
    {
      profileName: "Netgear Nighthawk R7000",
      typeId: 7,
      desc: "Wi-Fi router for high-speed internet.",
    },
    {
      profileName: "Ubiquiti UniFi Switch",
      typeId: 7,
      desc: "Managed PoE+ Gigabit Switch with SFP.",
    },
    {
      profileName: "Dell PowerEdge T40",
      typeId: 8,
      desc: "Server tower with Intel Xeon processor.",
    },
    {
      profileName: "Yamaha DXR8",
      typeId: 10,
      desc: "Active loudspeaker for live sound reinforcement.",
    },
  ];

  try {
    await Promise.all(profiles.map((profile) => assetProfile.upsert(profile)));
    console.log("Asset Profiles initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeAssetProfile };

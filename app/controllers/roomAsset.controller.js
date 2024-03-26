const db = require("../models");
const RoomAsset = db.roomAsset;
const Room = db.room;
const SerializedAsset = db.serializedAsset;
const Op = db.Sequelize.Op;

// Create and Save a new RoomAsset
exports.createRoomAsset = (req, res) => {
  // Validate request
  if (
    !req.body.roomId ||
    !req.body.serializedAssetId ||
    !req.body.checkoutDate
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a RoomAsset
  const roomAsset = {
    roomId: req.body.roomId,
    serializedAssetId: req.body.serializedAssetId,
    checkoutDate: req.body.checkoutDate,
    checkinDate: req.body.checkinDate,
    expectedCheckinDate: req.body.expectedCheckinDate,
    checkoutStatus: req.body.checkoutStatus,
  };

  // Save RoomAsset in the database
  RoomAsset.create(roomAsset)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the RoomAsset.",
      });
    });
};

// Retrieve all RoomAssets from the database.
exports.getAllRoomAssets = (req, res) => {
  RoomAsset.findAll({
    include: [
      {
        model: Room,
        as: "room",
        attributes: ["roomId", "roomNo", "buildingId", "activeStatus"],
      },
      {
        model: SerializedAsset,
        as: "serializedAsset",
        attributes: [
          "serializedAssetId",
          "serialNumber",
          "profileId",
          "serializedAssetName",
          "notes",
          "activeStatus",
        ],
      },
    ],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving room assets.",
      });
    });
};

// Find a single RoomAsset with a roomAssetId
exports.getRoomAssetById = (req, res) => {
  const roomAssetId = req.params.roomAssetId;

  RoomAsset.findByPk(roomAssetId, {
    include: [
      {
        model: Room,
        as: "room",
        attributes: ["roomId", "roomNo", "buildingId", "activeStatus"],
      },
      {
        model: SerializedAsset,
        attributes: [
          "serializedAssetId",
          "serialNumber",
          "profileId",
          "notes",
          "activeStatus",
        ],
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find RoomAsset with roomAssetId=${roomAssetId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving RoomAsset with roomAssetId=" + roomAssetId,
      });
    });
};

// Update a RoomAsset by the roomAssetId in the request
exports.updateRoomAsset = (req, res) => {
  const roomAssetId = req.params.roomAssetId;

  RoomAsset.update(req.body, {
    where: { roomAssetId: roomAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "RoomAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update room asset with roomAssetId=${roomAssetId}. Maybe RoomAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating RoomAsset with roomAssetId=" + roomAssetId,
      });
    });
};

// Delete a RoomAsset with the specified roomAssetId in the request
exports.deleteRoomAsset = (req, res) => {
  const roomAssetId = req.params.roomAssetId;

  RoomAsset.destroy({
    where: { roomAssetId: roomAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "RoomAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete room asset with roomAssetId=${roomAssetId}. Maybe RoomAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete RoomAsset with roomAssetId=" + roomAssetId,
      });
    });
};

// Delete all RoomAssets from the database.
exports.deleteAllRoomAssets = (req, res) => {
  RoomAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} RoomAssets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all room assets.",
      });
    });
};

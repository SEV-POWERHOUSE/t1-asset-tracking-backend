const db = require("../models");
const RoomAsset = db.roomAsset;
const Room = db.room;
const SerializedAsset = db.serializedAsset;
const Op = db.Sequelize.Op;

// Create and Save a new RoomAsset
exports.createRoomAsset = (req, res) => {
  // Validate request
  if (!req.body.roomId || !req.body.serializedAssetId) {
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

// Find a single RoomAsset with a roomId
exports.getRoomAssetByRoomId = (req, res) => {
  const roomId = req.params.roomId;

  RoomAsset.findByPk(roomId, {
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
          message: `Cannot find RoomAsset with roomId=${roomId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving RoomAsset with roomId=" + roomId,
      });
    });
};

// Update a RoomAsset by the roomId in the request
exports.updateRoomAsset = (req, res) => {
  const roomId = req.params.roomId;

  RoomAsset.update(req.body, {
    where: { roomId: roomId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "RoomAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update room asset with roomId=${roomId}. Maybe RoomAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating RoomAsset with roomId=" + roomId,
      });
    });
};

// Delete a RoomAsset with the specified roomId in the request
exports.deleteRoomAsset = (req, res) => {
  const roomId = req.params.roomId;

  RoomAsset.destroy({
    where: { roomId: roomId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "RoomAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete room asset with roomId=${roomId}. Maybe RoomAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete RoomAsset with roomId=" + roomId,
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

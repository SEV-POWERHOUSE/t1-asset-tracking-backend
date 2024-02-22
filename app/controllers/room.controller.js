const db = require("../models");
const Room = db.room;
const Building = db.building;

// Create and Save a new Room
exports.createRoom = (req, res) => {
  // Validate request
  if (!req.body.roomNo || !req.body.buildingId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Room
  const room = {
    roomNo: req.body.roomNo,
    buildingId: req.body.buildingId,
  };
  // Save Room in the database
  Room.create(room)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Room.",
      });
    });
};

// Retrieve all Rooms from the database.
exports.getAllRooms = (req, res) => {
  Room.findAll({
    include: [
      {
        model: Building,
        as: "building",
      },
    ],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving rooms.",
      });
    });
};

// Find a single Room with a roomId
exports.getRoomById = (req, res) => {
  const roomId = req.params.roomId;

  Room.findByPk(roomId, {
    include: [
      {
        model: Building,
        as: "building",
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find Room with roomId=${roomId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Room with roomId=" + roomId,
      });
    });
};

// Update a Room by the roomId in the request
exports.updateRoom = (req, res) => {
  const roomId = req.params.roomId;

  Room.update(req.body, {
    where: { roomId: roomId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Room was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update room with roomId=${roomId}. Maybe Room was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Room with roomId=" + roomId,
      });
    });
};

// Delete a Room with the specified roomId in the request
exports.deleteRoom = (req, res) => {
  const roomId = req.params.roomId;

  Room.destroy({
    where: { roomId: roomId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Room was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete room with roomId=${roomId}. Maybe Room was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Room with roomId=" + roomId,
      });
    });
};

// Delete all Rooms from the database.
exports.deleteAllRooms = (req, res) => {
  Room.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Rooms were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all rooms.",
      });
    });
};

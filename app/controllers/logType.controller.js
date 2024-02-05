const db = require("../models");
const LogType = db.logType;
const Op = db.Sequelize.Op;

// Create and Save a new LogType
exports.createLogType = (req, res) => {
  // Validate request
  if (!req.body.logTypeId || !req.body.typeName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a LogType
  const logType = {
    logTypeId: req.body.logTypeId,
    typeName: req.body.typeName,
  };

  // Save LogType in the database
  LogType.create(logType)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the LogType.",
      });
    });
};

// Retrieve all LogTypes from the database.
exports.getAllLogTypes = (req, res) => {
  LogType.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving log types.",
      });
    });
};

// Find a single LogType with a logTypeId
exports.getLogTypeById = (req, res) => {
  const logTypeId = req.params.logTypeId;

  LogType.findByPk(logTypeId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find LogType with logTypeId=${logTypeId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving LogType with logTypeId=" + logTypeId,
      });
    });
};

// Update a LogType by the logTypeId in the request
exports.updateLogType = (req, res) => {
  const logTypeId = req.params.logTypeId;

  LogType.update(req.body, {
    where: { logTypeId: logTypeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "LogType was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update log type with logTypeId=${logTypeId}. Maybe LogType was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating LogType with logTypeId=" + logTypeId,
      });
    });
};

// Delete a LogType with the specified logTypeId in the request
exports.deleteLogType = (req, res) => {
  const logTypeId = req.params.logTypeId;

  LogType.destroy({
    where: { logTypeId: logTypeId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "LogType was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete log type with logTypeId=${logTypeId}. Maybe LogType was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete LogType with logTypeId=" + logTypeId,
      });
    });
};

// Delete all LogTypes from the database.
exports.deleteAllLogTypes = (req, res) => {
  LogType.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send({ message: `${nums} LogTypes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all log types.",
      });
    });
};

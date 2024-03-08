const db = require("../models");
const Lease = db.lease;
const Op = db.Sequelize.Op;

// Create and Save a new Lease
exports.createLease = (req, res) => {
  // Validate request
  if (
    !req.body.leaseId ||
    !req.body.term ||
    !req.body.endDate ||
    !req.body.length ||
    !req.body.serializedAssetId
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Lease
  const lease = {
    leaseId: req.body.leaseId,
    term: req.body.term,
    endDate: req.body.endDate,
    length: req.body.length,
    serializedAssetId: req.body.serializedAssetId,
  };

  // Save Lease in the database
  Lease.create(lease)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Lease.",
      });
    });
};

// Retrieve all Leases from the database.
exports.getAllLeases = (req, res) => {
  Lease.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving leases.",
      });
    });
};

// Find a single Lease with a leaseId
exports.getLeaseById = (req, res) => {
  const leaseId = req.params.leaseId;

  Lease.findByPk(leaseId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find Lease with leaseId=${leaseId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Lease with leaseId=" + leaseId,
      });
    });
};

// Update a Lease by the leaseId in the request
exports.updateLease = (req, res) => {
  const leaseId = req.params.leaseId;

  Lease.update(req.body, {
    where: { leaseId: leaseId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Lease was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update lease with leaseId=${leaseId}. Maybe Lease was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Lease with leaseId=" + leaseId,
      });
    });
};

// Delete a Lease with the specified leaseId in the request
exports.deleteLease = (req, res) => {
  const leaseId = req.params.leaseId;

  Lease.destroy({
    where: { leaseId: leaseId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Lease was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete lease with leaseId=${leaseId}. Maybe Lease was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Lease with leaseId=" + leaseId,
      });
    });
};

// Delete all Leases from the database.
exports.deleteAllLeases = (req, res) => {
  Lease.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Leases were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all leases.",
      });
    });
};

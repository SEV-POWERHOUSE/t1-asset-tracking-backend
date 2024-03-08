const db = require("../models");
const Service = db.service;
const Op = db.Sequelize.Op;

// Create and Save a new Service
exports.createService = (req, res) => {
  // Validate request
  if (
    !req.body.serviceId ||
    !req.body.vendor ||
    !req.body.type ||
    !req.body.startDate ||
    !req.body.serializedAssetId
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Service
  const service = {
    serviceId: req.body.serviceId,
    vendor: req.body.vendor,
    type: req.body.type,
    startDate: req.body.startDate,
    endDate: req.body.endDate || null,
    length: req.body.length || null,
    serializedAssetId: req.body.serializedAssetId,
  };

  // Save Service in the database
  Service.create(service)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Service.",
      });
    });
};

// Retrieve all Services from the database.
exports.getAllServices = (req, res) => {
  Service.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving services.",
      });
    });
};

// Find a single Service with a serviceId
exports.getServiceById = (req, res) => {
  const serviceId = req.params.serviceId;

  Service.findByPk(serviceId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find Service with serviceId=${serviceId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Service with serviceId=" + serviceId,
      });
    });
};

// Update a Service by the serviceId in the request
exports.updateService = (req, res) => {
  const serviceId = req.params.serviceId;

  Service.update(req.body, {
    where: { serviceId: serviceId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Service was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update service with serviceId=${serviceId}. Maybe Service was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Service with serviceId=" + serviceId,
      });
    });
};

// Delete a Service with the specified serviceId in the request
exports.deleteService = (req, res) => {
  const serviceId = req.params.serviceId;

  Service.destroy({
    where: { serviceId: serviceId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Service was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete service with serviceId=${serviceId}. Maybe Service was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Service with serviceId=" + serviceId,
      });
    });
};

// Delete all Services from the database.
exports.deleteAllServices = (req, res) => {
  Service.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Services were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all services.",
      });
    });
};

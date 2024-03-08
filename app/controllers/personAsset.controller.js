const db = require("../models");
const PersonAsset = db.personAsset;
const Person = db.person;
const SerializedAsset = db.serializedAsset;
const Op = db.Sequelize.Op;

// Create and Save a new PersonAsset
exports.createPersonAsset = (req, res) => {
  // Validate request
  if (
    !req.body.serializedAssetId ||
    !req.body.personId ||
    !req.body.checkoutDate
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a PersonAsset
  const personAsset = {
    personId: req.body.personId,
    serializedAssetId: req.body.serializedAssetId,
    checkoutDate: req.body.checkoutDate,
    checkinDate: req.body.checkinDate,
    expectedCheckinDate: req.body.expectedCheckinDate,
    checkoutStatus: req.body.checkoutStatus,
  };

  // Save PersonAsset in the database
  PersonAsset.create(personAsset)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PersonAsset.",
      });
    });
};

// Retrieve all PersonAssets from the database.
exports.getAllPersonAssets = (req, res) => {
  PersonAsset.findAll({
    include: [
      {
        model: Person,
        as: "person",
        attributes: [
          "personId",
          "fName",
          "lName",
          "email",
          "idNumber",
          "activeStatus",
        ],
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
          err.message || "Some error occurred while retrieving person assets.",
      });
    });
};

// Find a single PersonAsset with a personAssetId
exports.getPersonAssetById = (req, res) => {
  const personAssetId = req.params.personAssetId;

  PersonAsset.findByPk(personAssetId, {
    include: [
      {
        model: Person,
        attributes: [
          "personId",
          "fName",
          "lName",
          "email",
          "idNumber",
          "activeStatus",
        ],
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
          message: `Cannot find PersonAsset with personAssetId=${personAssetId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Error retrieving PersonAsset with personAssetId=" + personAssetId,
      });
    });
};

// Update a PersonAsset by the personAssetId in the request
exports.updatePersonAsset = (req, res) => {
  const personAssetId = req.params.personAssetId;

  PersonAsset.update(req.body, {
    where: { personAssetId: personAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "PersonAsset was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update person asset with personAssetId=${personAssetId}. Maybe PersonAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Error updating PersonAsset with personAssetId=" + personAssetId,
      });
    });
};

// Delete a PersonAsset with the specified personAssetId in the request
exports.deletePersonAsset = (req, res) => {
  const personAssetId = req.params.personAssetId;

  PersonAsset.destroy({
    where: { personAssetId: personAssetId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "PersonAsset was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete person asset with personAssetId=${personAssetId}. Maybe PersonAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Could not delete PersonAsset with personAssetId=" + personAssetId,
      });
    });
};

// Delete all PersonAssets from the database.
exports.deleteAllPersonAssets = (req, res) => {
  PersonAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} PersonAssets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all person assets.",
      });
    });
};

const db = require("../models");
const Person = db.person;
const Op = db.Sequelize.Op;

// Create and Save a new Person
exports.createPerson = (req, res) => {
  // Validate request
  if (
    !req.body.fName ||
    !req.body.lName ||
    !req.body.email ||
    !req.body.idNumber
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Person
  const person = {
    personId: req.body.personId,
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    idNumber: req.body.idNumber,
    activeStatus: req.body.activeStatus,
  };

  // Save Person in the database
  Person.create(person)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person.",
      });
    });
};

// Retrieve all Persons from the database.
exports.getAllPersons = (req, res) => {
  Person.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving persons.",
      });
    });
};

// Find a single Person with a personId
exports.getPersonById = (req, res) => {
  const personId = req.params.personId;

  Person.findByPk(personId)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).send({
          message: `Cannot find Person with personId=${personId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Person with personId=" + personId,
      });
    });
};

// Update a Person by the personId in the request
exports.updatePerson = (req, res) => {
  const personId = req.params.personId;

  Person.update(req.body, {
    where: { personId: personId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Person was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update person with personId=${personId}. Maybe Person was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Person with personId=" + personId,
      });
    });
};

// Delete a Person with the specified personId in the request
exports.deletePerson = (req, res) => {
  const personId = req.params.personId;

  Person.destroy({
    where: { personId: personId },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Person was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete person with personId=${personId}. Maybe Person was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Person with personId=" + personId,
      });
    });
};

// Delete all Persons from the database.
exports.deleteAllPersons = (req, res) => {
  Person.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Persons were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all persons.",
      });
    });
};

const db = require("../models");
const UserGroup = db.userGroup;

// Create and Save a new UserGroup
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a UserGroup
  try {
    const userGroup = await UserGroup.create({ name: req.body.name });
    res.send(userGroup);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the UserGroup.",
    });
  }
};

// Retrieve all UserGroups
exports.findAll = async (req, res) => {
  try {
    const userGroups = await UserGroup.findAll();
    res.send(userGroups);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving UserGroups.",
    });
  }
};

// Find a single UserGroup with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const userGroup = await UserGroup.findByPk(id);
    if (userGroup) {
      res.send(userGroup);
    } else {
      res.status(404).send({
        message: `Cannot find UserGroup with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving UserGroup with id=" + id,
    });
  }
};

// Update a UserGroup by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await UserGroup.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "UserGroup was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update UserGroup with id=${id}. Maybe UserGroup was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating UserGroup with id=" + id,
    });
  }
};

// Delete a UserGroup with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await UserGroup.destroy({
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "UserGroup was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete UserGroup with id=${id}. Maybe UserGroup was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete UserGroup with id=" + id,
    });
  }
};


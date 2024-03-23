const db = require("../models");
const UserRole = db.userRole;

// Create and Save a new UserRole
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a UserRole
  try {
    const userRole = await UserRole.create({
      name: req.body.name,
      defaultCanAdd: req.body.defaultCanAdd,
      defaultCanEdit: req.body.defaultCanEdit,
      defaultCanDelete: req.body.defaultCanDelete,
      defaultCanArchive: req.body.defaultCanArchive,
      defaultCanActivate: req.body.defaultCanActivate
    });
    res.send(userRole);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the UserRole.",
    });
  }
};


// Retrieve all UserRoles
exports.findAll = async (req, res) => {
  try {
    const userRoles = await UserRole.findAll();
    res.send(userRoles);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving UserRoles.",
    });
  }
};

// Find a single UserRole with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const userRole = await UserRole.findByPk(id);
    if (userRole) {
      res.send(userRole);
    } else {
      res.status(404).send({
        message: `Cannot find UserRole with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving UserRole with id=" + id,
    });
  }
};

// Update a UserRole by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await UserRole.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "UserRole was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update UserRole with id=${id}. Maybe UserRole was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating UserRole with id=" + id,
    });
  }
};



// Delete a UserRole with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await UserRole.destroy({
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "UserRole was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete UserRole with id=${id}. Maybe UserRole was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete UserRole with id=" + id,
    });
  }
};

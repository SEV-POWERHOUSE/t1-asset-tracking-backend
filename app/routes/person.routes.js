module.exports = (app) => {
    const person = require("../controllers/person.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Person
    router.post("/", [authenticate], person.createPerson);
  
    // Retrieve all Persons
    router.get("/", [authenticate], person.getAllPersons);
  
    // Retrieve a single Person by personId
    router.get("/:personId", [authenticate], person.getPersonById);
  
    // Update a Person by personId
    router.put("/:personId", [authenticate], person.updatePerson);
  
    // Delete a Person by personId
    router.delete("/:personId", [authenticate], person.deletePerson);
  
    // Delete all Persons
    router.delete("/", [authenticate], person.deleteAllPersons);
  
    app.use("/asset-t1/person", router);
  };
  
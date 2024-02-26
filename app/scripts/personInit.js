const db = require("../models");
const Person = db.person;

async function initializePersons() {
  try {
    await Promise.all([
      Person.upsert({
        fName: "Jaxen",
        lName: "McRay",
        email: "jaxen.mcray@eagles.oc.edu",
        idNumber: "1000001",
      }),
      Person.upsert({
        fName: "Zane",
        lName: "Fike",
        email: "z.fike@eagles.oc.edu",
        idNumber: "1000002",
      }),
      Person.upsert({
        fName: "Solomon",
        lName: "Granger",
        email: "solomon.granger@eagles.oc.edu",
        idNumber: "1000003",
      }),
      Person.upsert({
        fName: "Justin",
        lName: "Davis",
        email: "justin.davis@eagles.oc.edu",
        idNumber: "1000004",
      }),
      Person.upsert({
        fName: "Emily",
        lName: "Wong",
        email: "emily.wong@eagles.oc.edu",
        idNumber: "1000005",
      }),
      Person.upsert({
        fName: "Garrett-Peter",
        lName: "Thompson",
        email: "gp.thompson@eagles.oc.edu",
        idNumber: "1000006",
      }),
      Person.upsert({
        fName: "Arthur",
        lName: "Morgan",
        email: "arthur.morgan@eagles.oc.edu",
        idNumber: "1000007",
      }),
      Person.upsert({
        fName: "Lucas",
        lName: "Morris",
        email: "lucas.morris@eagles.oc.edu",
        idNumber: "1000008",
      }),
      Person.upsert({
        fName: "Sophia",
        lName: "Garcia",
        email: "sophia.garcia@eagles.oc.edu",
        idNumber: "1000009",
      }),
      Person.upsert({
        fName: "Ethan",
        lName: "Lee",
        email: "ethan.lee@eagles.oc.edu",
        idNumber: "1000010",
      }),
      Person.upsert({
        fName: "Alex",
        lName: "Johnson",
        email: "alex.johnson@eagles.oc.edu",
        idNumber: "1000011",
      }),
      Person.upsert({
        fName: "Isabella",
        lName: "Martinez",
        email: "isabella.martinez@eagles.oc.edu",
        idNumber: "1000012",
      }),
      Person.upsert({
        fName: "Elijah",
        lName: "Hernandez",
        email: "elijah.hernandez@eagles.oc.edu",
        idNumber: "1000013",
      }),
      Person.upsert({
        fName: "Zoe",
        lName: "Robinson",
        email: "zoe.robinson@eagles.oc.edu",
        idNumber: "1000014",
      }),
      Person.upsert({
        fName: "Adrian",
        lName: "Clark",
        email: "adrian.clark@eagles.oc.edu",
        idNumber: "1000015",
      }),
      Person.upsert({
        fName: "Samantha",
        lName: "Lewis",
        email: "samantha.lewis@eagles.oc.edu",
        idNumber: "1000016",
      }),
      Person.upsert({
        fName: "Ian",
        lName: "Walker",
        email: "ian.walker@eagles.oc.edu",
        idNumber: "1000017",
      }),
      Person.upsert({
        fName: "Julia",
        lName: "Perez",
        email: "julia.perez@eagles.oc.edu",
        idNumber: "1000018",
      }),
    ]);
    console.log("Persons initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializePersons };

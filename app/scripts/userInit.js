const db = require("../models");
const user = db.user;

async function initializeUser() {
  try {
    await Promise.all([
      user.upsert({
        fName: "Jaxen",
        lName: "McRay",
        email: "jaxen.mcray@eagles.oc.edu",
        userRoleId: 1,
        devPermission: true,
      }),
      user.upsert({
        fName: "Zane",
        lName: "Fike",
        email: "z.fike@eagles.oc.edu",
        userRoleId: 1,
        devPermission: true,
      }),
      user.upsert({
        fName: "Solomon",
        lName: "Granger",
        email: "solomon.granger@eagles.oc.edu",
        userRoleId: 1,
        devPermission: true,
      }),
      user.upsert({
        fName: "Justin",
        lName: "Davis",
        email: "justin.davis@eagles.oc.edu",
        userRoleId: 1,
        devPermission: true,
      }),
      user.upsert({
        fName: "Emily",
        lName: "Wong",
        email: "emily.wong@eagles.oc.edu",
        userRoleId: 5,
        devPermission: false,
      }),
      user.upsert({
        fName: "Garrett-Peter",
        lName: "Thompson",
        email: "gp.thompson@eagles.oc.edu",
        userRoleId: 2,
        devPermission: false,
      }),
      user.upsert({
        fName: "Arthur",
        lName: "Morgan",
        email: "arthur.morgan@eagles.oc.edu",
        userRoleId: 3,
        devPermission: false,
      }),
      user.upsert({
        fName: "Lucas",
        lName: "Morris",
        email: "lucas.morris@eagles.oc.edu",
        userRoleId: 4,
        devPermission: false,
      }),
      user.upsert({
        fName: "Sophia",
        lName: "Garcia",
        email: "sophia.garcia@eagles.oc.edu",
        userRoleId: 7,
        devPermission: false,
      }),
      user.upsert({
        fName: "Ethan",
        lName: "Lee",
        email: "ethan.lee@eagles.oc.edu",
        userRoleId: 8,
        devPermission: false,
      }),
      user.upsert({
        fName: "Alex",
        lName: "Johnson",
        email: "alex.johnson@eagles.oc.edu",
        userRoleId: 2,
        devPermission: false,
      }),
      user.upsert({
        fName: "Isabella",
        lName: "Martinez",
        email: "isabella.martinez@eagles.oc.edu",
        userRoleId: 1,
        devPermission: false,
      }),
      user.upsert({
        fName: "Elijah",
        lName: "Hernandez",
        email: "elijah.hernandez@eagles.oc.edu",
        userRoleId: 5,
        devPermission: false,
      }),
      user.upsert({
        fName: "Zoe",
        lName: "Robinson",
        email: "zoe.robinson@eagles.oc.edu",
        userRoleId: 6,
        devPermission: false,
      }),
      user.upsert({
        fName: "Adrian",
        lName: "Clark",
        email: "adrian.clark@eagles.oc.edu",
        userRoleId: 3,
        devPermission: false,
      }),
      user.upsert({
        fName: "Samantha",
        lName: "Lewis",
        email: "samantha.lewis@eagles.oc.edu",
        userRoleId: 4,
        devPermission: false,
      }),
      user.upsert({
        fName: "Ian",
        lName: "Walker",
        email: "ian.walker@eagles.oc.edu",
        userRoleId: 7,
        devPermission: false,
      }),
      user.upsert({
        fName: "Julia",
        lName: "Perez",
        email: "julia.perez@eagles.oc.edu",
        userRoleId: 8,
        devPermission: false,
      }),
    ]);
    console.log("Users initialized successfully");
  } catch (error) {
    console.log("Initialization failed:", error);
  }
}

module.exports = { initializeUser };

module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define(
    "person", {
    personId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  return Person;
}
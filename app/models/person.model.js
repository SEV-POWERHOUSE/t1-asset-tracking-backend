module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define(
    "person",
    {
      personId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        unique: true, // Ensure email is unique across all records
      },
      idNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activeStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      fullName: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.fName} ${this.lName}`;
        },
      },
      fullNameWithId: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.fName} ${this.lName} (${this.idNumber})`;
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Person;
};

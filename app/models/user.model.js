module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      userGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: "userGroup",
          key: "id",
        },
        allowNull: false, // Changed to false because we are now providing a default value
        defaultValue: 1, // Default userGroup id set to 1
      },
      devPermission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Most users won't have dev permissions by default
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return User;
};
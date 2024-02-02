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
      },
      userGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: "userGroups",
          key: "id",
        },
        allowNull: true, // Initially null if you assign groups after creation
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};

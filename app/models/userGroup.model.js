module.exports = (sequelize, Sequelize) => {
  const UserGroup = sequelize.define(
    "userGroup",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Ensure email is unique across all records
      },
    },
    {
      tableName: 'userGroups',
      timestamps: false,
    }
  );
  return UserGroup;
};

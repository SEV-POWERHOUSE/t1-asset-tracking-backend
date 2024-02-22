module.exports = (sequelize, Sequelize) => {
  const Building = sequelize.define(
    "building",
    {
      buildingId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      abbreviation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noOfRooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Building;
};

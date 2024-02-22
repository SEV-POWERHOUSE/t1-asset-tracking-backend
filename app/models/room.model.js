module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    "room",
    {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      roomNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      buildingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "building",
          key: "buildingId",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Room;
};

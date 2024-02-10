module.exports = (sequelize, Sequelize) => {
  const RoomAsset = sequelize.define(
    "roomAsset",
    {
      roomAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "room",
          key: "roomId",
        },
      },
      serializedAssetId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "serializedAsset",
          key: "serializedAssetId",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return RoomAsset;
};

module.exports = (sequelize, Sequelize) => {
    const RoomAsset = sequelize.define(
        "roomAsset", {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      serialAssetId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
    return RoomAsset;
  }
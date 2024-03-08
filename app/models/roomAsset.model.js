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
      checkoutDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expectedCheckinDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      checkinDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      checkoutStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return RoomAsset;
};

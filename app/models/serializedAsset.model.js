module.exports = (sequelize, Sequelize) => {
  const SerializedAsset = sequelize.define(
    "serializedAsset",
    {
      serializedAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serializedNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assetProfile",
          key: "profileId",
        },
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activeStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return SerializedAsset;
};

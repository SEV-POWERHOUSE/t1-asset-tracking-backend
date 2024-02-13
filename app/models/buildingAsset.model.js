module.exports = (sequelize, Sequelize) => {
  const BuildingAsset = sequelize.define(
    "buildingAsset",
    {
      buildingAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      buildingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "building",
          key: "buildingId",
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
  return BuildingAsset;
};

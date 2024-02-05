module.exports = (sequelize, Sequelize) => {
    const BuildingAsset = sequelize.define(
        "buildingAsset", {
      buildingId: {
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
    return BuildingAsset;
  }
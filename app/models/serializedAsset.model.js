module.exports = (sequelize, Sequelize) => {
    const SerialAsset = sequelize.define(
        "serialAsset", {
      serialAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
     /* profileId: {
        type: Sequelize.,
        allowNull: false,
      },*/
      notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return SerialAsset;
  }
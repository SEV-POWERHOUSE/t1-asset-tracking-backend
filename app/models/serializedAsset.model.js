module.exports = (sequelize, Sequelize) => {
    const SerializedAsset = sequelize.define(
        "serializedAsset", {
      serializedAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      serializedNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
     profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return SerializedAsset;
  }
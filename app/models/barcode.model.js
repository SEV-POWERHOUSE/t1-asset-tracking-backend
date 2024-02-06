module.exports = (sequelize, Sequelize) => {
    const Barcode = sequelize.define(
        "barcode", {
      barcodeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      blackAndWhiteBinaryCodeOffBackOfLabelThing: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serialAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Barcode;
  }
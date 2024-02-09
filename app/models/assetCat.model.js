module.exports = (sequelize, Sequelize) => {
    const AssetCat = sequelize.define(
        "assetCat", {
      catId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      catName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    }, {
      timestamps: false,
      freezeTableName: true
    });
    return AssetCat;
  }
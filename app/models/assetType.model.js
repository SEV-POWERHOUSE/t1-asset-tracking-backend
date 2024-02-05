module.exports = (sequelize, Sequelize) => {
    const AssetType = sequelize.define(
        "assetType", {
      typeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      catId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      
    }, {
      timestamps: false,
    });
    return AssetType;
  }
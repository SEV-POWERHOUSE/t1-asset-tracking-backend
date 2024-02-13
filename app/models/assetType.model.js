module.exports = (sequelize, Sequelize) => {
  const AssetType = sequelize.define(
    "assetType",
    {
      typeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      catId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assetCat",
          key: "catId",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return AssetType;
};

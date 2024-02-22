module.exports = (sequelize, Sequelize) => {
  const AssetCategory = sequelize.define(
    "assetCategory",
    {
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return AssetCategory;
};

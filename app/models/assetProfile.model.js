module.exports = (sequelize, Sequelize) => {
  const AssetProfile = sequelize.define(
    "assetProfile",
    {
      profileId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assetType",
          key: "typeId",
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return AssetProfile;
};

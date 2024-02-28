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
      profileName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assetType",
          key: "typeId",
        },
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      activeStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return AssetProfile;
};

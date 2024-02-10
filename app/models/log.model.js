module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define(
    "log",
    {
      logId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      logTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "logType",
          key: "logTypeId",
        },
      },
      personAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "personAsset",
          key: "personAssetId",
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Log;
};

module.exports = (sequelize, Sequelize) => {
  const LogType = sequelize.define(
    "logType",
    {
      logTypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return LogType;
};

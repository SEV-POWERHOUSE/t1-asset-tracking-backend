module.exports = (sequelize, Sequelize) => {
    const LogType = sequelize.define(
        "logType", {
      logTypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      typeName: {
        type: Sequelize.String,
        allowNull: false,
      },
      
    }, {
      timestamps: false,
    });
    return LogType;
  }
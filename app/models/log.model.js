const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Log = sequelize.define(
        "log", {
      logId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      logTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      personAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      
    }, {
      timestamps: true, 
    });
    return Log;
}

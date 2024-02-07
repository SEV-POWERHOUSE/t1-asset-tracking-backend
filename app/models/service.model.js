module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define(
        "service", {
      serviceId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      vendor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      serialAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Service;
  }
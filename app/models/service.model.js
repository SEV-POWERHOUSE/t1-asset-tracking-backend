import { Date } from '@sequelize/core';

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
        type: Sequelize.Date,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.Date,
        allowNull: True,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: True,
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
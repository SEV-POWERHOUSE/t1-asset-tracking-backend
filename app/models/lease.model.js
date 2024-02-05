import { Date } from '@sequelize/core';
module.exports = (sequelize, Sequelize) => {
    const Lease = sequelize.define(
        "lease", {
      leaseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      term: {
        type: Sequelize.String,
        allowNull: false,
      },
     endDate: {
        type: Sequelize.Date,
        allowNull: false,
      },
      length: {
        type: Sequelize.String,
        allowNull: false,
      },
      serialAssetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Lease;
  }
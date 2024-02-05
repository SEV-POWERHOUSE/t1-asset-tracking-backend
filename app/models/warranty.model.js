import { Date } from '@sequelize/core';
module.exports = (sequelize, Sequelize) => {
    const Warranty = sequelize.define(
        "warranty", {
      warantyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      warrantyType: {
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
    return Warranty;
  }
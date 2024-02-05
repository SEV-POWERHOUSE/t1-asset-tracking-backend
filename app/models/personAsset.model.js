import { Date } from '@sequelize/core';
module.exports = (sequelize, Sequelize) => {
    const PersonAsset = sequelize.define(
      "personAsset", {
            serialAssetId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },

      personAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      checkoutDate: {
        type: Sequelize.Date,
        allowNull: false,
      },
      checkinDate: {
        type: Sequelize.Date,
        allowNull: false
      },
      expectedCheckinDate: {
        type: Sequelize.Date,
        allowNull: true,
      },
     checkoutType: {
        type: Sequelize.Date,
        allowNull: false,
      },
      personId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return PersonAsset;
  }
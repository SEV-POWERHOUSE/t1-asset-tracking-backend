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
        type: Sequelize.DATE,
        allowNull: false,
      },
      checkinDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expectedCheckinDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
     checkoutType: {
        type: Sequelize.STRING,
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
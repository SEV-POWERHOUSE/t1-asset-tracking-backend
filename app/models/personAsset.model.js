module.exports = (sequelize, Sequelize) => {
  const PersonAsset = sequelize.define(
    "personAsset",
    {
      personAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serializedAssetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "serializedAsset",
          key: "serializedAssetId",
        },
      },
      checkoutDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      checkinDate: {
        type: Sequelize.DATE,
        allowNull: false,
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
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "person",
          key: "personId",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return PersonAsset;
};

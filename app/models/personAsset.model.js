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
      personId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "person",
          key: "personId",
        },
      },
      checkoutDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expectedCheckinDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      checkinDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return PersonAsset;
};

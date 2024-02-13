module.exports = (sequelize, Sequelize) => {
  const Warranty = sequelize.define(
    "warranty",
    {
      warrantyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      warrantyType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      length: {
        type: Sequelize.STRING,
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Warranty;
};

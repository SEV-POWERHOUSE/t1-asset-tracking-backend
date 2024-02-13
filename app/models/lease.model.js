module.exports = (sequelize, Sequelize) => {
  const Lease = sequelize.define(
    "lease",
    {
      leaseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      term: {
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
  return Lease;
};

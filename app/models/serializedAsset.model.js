module.exports = (sequelize, Sequelize) => {
  const SerializedAsset = sequelize.define(
    "serializedAsset",
    {
      serializedAssetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assetProfile",
          key: "profileId",
        },
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activeStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      serializedAssetName: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.get('assetProfile')?.profileName} (${this.serialNumber})`;
        },
        // Note: Since it's a virtual field, no setter is defined
      },
    },
    
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return SerializedAsset;
};

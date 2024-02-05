module.exports = (sequelize, Sequelize) => {
    const AssetProfile = sequelize.define(
        "assetProfile", {
      profileId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
     description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profileData: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
    return AssetProfile;
  }
module.exports = (sequelize, Sequelize) => {
  const ProfileData = sequelize.define(
    "profileData",
    {
      profileDataId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      // Name of the data field
      field: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      // Data field for asset data that needs to be saved
      data: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      profileId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "assetProfile",
            key: "profileId",
          },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return ProfileData;
};


// Love, Zane (I edited it)
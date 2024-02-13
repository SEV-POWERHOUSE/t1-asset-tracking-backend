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
      dataName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataDesc: {
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

module.exports = (sequelize, Sequelize) => {
    const ProfileData = sequelize.define(
        "profileData", {
     profileId: {
         type: Sequelize.INTEGER,
        primaryKey: true,
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
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
    return ProfileData;
  }
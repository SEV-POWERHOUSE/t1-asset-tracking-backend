module.exports = (sequelize, Sequelize) => {
    const Warranty = sequelize.define(
        "warranty", {
      warrantyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      serialAssetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Warranty;
  }
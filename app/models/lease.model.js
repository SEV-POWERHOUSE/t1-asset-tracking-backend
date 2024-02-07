module.exports = (sequelize, Sequelize) => {
    const Lease = sequelize.define(
        "lease", {
      leaseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      serialAssetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Lease;
  }
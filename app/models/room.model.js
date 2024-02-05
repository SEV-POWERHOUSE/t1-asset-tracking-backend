module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define(
        "room", {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      roomNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      buildingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
    return Room;
  }
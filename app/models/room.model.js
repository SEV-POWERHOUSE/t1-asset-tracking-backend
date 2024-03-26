module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    "room",
    {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      roomNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      activeStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      buildingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "building",
          key: "buildingId",
        },
      },
      roomName: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.get("building")?.abbreviation} (${
            this.roomNo
          })`;
        },
        // Note: Since it's a virtual field, no setter is defined
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Room;
};

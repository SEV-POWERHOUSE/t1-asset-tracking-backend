const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userGroup = require("./userGroup.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.session = require("./session.model.js")(sequelize, Sequelize);
 db.assetCat = require("./assetCat.model.js")(sequelize, Sequelize);
 db.assetType = require("./assetType.model.js")(sequelize, Sequelize);
db.assetProfile = require("./assetProfile.model.js")(sequelize, Sequelize);
// db.barcode = require("./barcode.model.js")(sequelize, Sequelize);
// db.building = require("./building.model.js")(sequelize, Sequelize);
// db.buildingAsset = require("./buildingAsset.model.js")(sequelize, Sequelize);
// db.lease = require("./lease.model.js")(sequelize, Sequelize);
// db.log = require("./log.model.js")(sequelize, Sequelize);
// db.logType = require("./logType.model.js")(sequelize, Sequelize);
// db.personAsset = require("./personAsset.model.js")(sequelize, Sequelize);
// db.person = require("./person.model.js")(sequelize, Sequelize);
// db.profileData = require("./profileData.model.js")(sequelize, Sequelize);
// db.room = require("./room.model.js")(sequelize, Sequelize);
// db.roomAsset = require("./roomAsset.model.js")(sequelize, Sequelize);
 // db.serializedAsset = require("./serializedAsset.model.js")(sequelize,Sequelize);
// db.service = require("./service.model.js")(sequelize, Sequelize);
// db.warranty = require("./warranty.model.js")(sequelize, Sequelize);

// User and UserGroup
db.userGroup.hasMany(db.user, {
  foreignKey: "userGroupId",
  onDelete: "SET NULL",
});
db.user.belongsTo(db.userGroup, {
  foreignKey: "userGroupId",
  onDelete: "SET NULL",
});

// Users and Sessions Link
db.user.hasMany(db.session, { foreignKey: "userId", onDelete: "CASCADE" });
db.session.belongsTo(db.user, { foreignKey: "userId", onDelete: "CASCADE" });

//AssetCat and AssetType Link
db.assetCat.hasMany(db.assetType, { foreignKey: "catId", onDelete: "CASCADE" });
db.assetType.belongsTo(db.assetCat, {
  foreignKey: "catId",
  onDelete: "CASCADE",
});

// //AssetType and AssetProfile Link
db.assetType.hasMany(db.assetProfile, {
  foreignKey: "typeId",
  onDelete: "CASCADE",
});
db.assetProfile.belongsTo(db.assetType, {
  foreignKey: "typeId",
  onDelete: "CASCADE",
});

// //AssetProfile and ProfileData Link
// db.assetProfile.hasMany(db.profileData, {
//   foreignKey: "profileId",
//   onDelete: "CASCADE",
// });
// db.profileData.belongsTo(db.assetProfile, {
//   foreignKey: "profileId",
//   onDelete: "CASCADE",
// });

// //Asset Profile and SerializedAsset Link
// db.assetProfile.hasMany(db.serializedAsset, {
//   foreignKey: "profileId",
//   onDelete: "CASCADE",
// });
// db.serializedAsset.belongsTo(db.assetProfile, {
//   foreignKey: "profileId",
//   onDelete: "CASCADE",
// });

// //SerializedAsset and Barcode Link
// db.serializedAsset.hasMany(db.barcode, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });
// db.barcode.belongsTo(db.serializedAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });

// // Buildings and BuildingAsset Link
// db.building.hasMany(db.buildingAsset, {
//   foreignKey: "buildingId",
//   onDelete: "CASCADE",
// });
// db.buildingAsset.belongsTo(db.building, {
//   foreignKey: "buildingId",
//   onDelete: "CASCADE",
// });

// //Room and Room Asset Link
// db.room.hasMany(db.roomAsset, { foreignKey: "roomId", onDelete: "CASCADE" });
// db.roomAsset.belongsTo(db.room, { foreignKey: "roomId", onDelete: "CASCADE" });

// //Building and Rooms Link
// db.building.hasMany(db.room, { foreignKey: "buildingId", onDelete: "CASCADE" });
// db.room.belongsTo(db.building, {
//   foreignKey: "buildingId",
//   onDelete: "CASCADE",
// });

// //Person and PersonAsset Link
// db.person.hasMany(db.personAsset, {
//   foreignKey: "personId",
//   onDelete: "CASCADE",
// });
// db.personAsset.belongsTo(db.person, {
//   foreignKey: "personId",
//   onDelete: "CASCADE",
// });

// //BuildingAsset and SerializedAsset Link
// db.buildingAsset.hasMany(db.serializedAsset, {
//   foreignKey: "buildingAssetId",
//   onDelete: "CASCADE",
// });
// db.serializedAsset.belongsTo(db.buildingAsset, {
//   foreignKey: "buildingAssetId",
//   onDelete: "CASCADE",
// });

// //RoomAsset and SerializedAsset Link
// db.roomAsset.hasMany(db.serializedAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });
// db.serializedAsset.belongsTo(db.roomAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });

// //Log and LogType Link
// db.logType.hasMany(db.log, { foreignKey: "logTypeId", onDelete: "CASCADE" });
// db.log.belongsTo(db.logType, { foreignKey: "logTypeId", onDelete: "CASCADE" });

// //PersonAsset and Log Link
// db.personAsset.hasMany(db.log, {
//   foreignKey: "personAssetId",
//   onDelete: "CASCADE",
// });
// db.log.belongsTo(db.personAsset, {
//   foreignKey: "personAssetId",
//   onDelete: "CASCADE",
// });

// //Warranty and SerializedAsset Link
// db.serializedAsset.hasOne(db.warranty, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });
// db.warranty.belongsTo(db.serializedAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });

// //Lease and SerializedAsset Link
// db.serializedAsset.hasOne(db.lease, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });
// db.lease.belongsTo(db.serializedAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });

// //Service and SerializedAsset Link
// db.serializedAsset.hasOne(db.service, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });
// db.service.belongsTo(db.serializedAsset, {
//   foreignKey: "serializedAssetId",
//   onDelete: "CASCADE",
// });

module.exports = db;

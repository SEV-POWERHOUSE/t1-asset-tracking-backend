const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: 0,
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

// Users and Sessions
db.user.hasMany(db.session, { foreignKey: "userId", onDelete: "CASCADE" });
db.session.belongsTo(db.user, { foreignKey: "userId", onDelete: "CASCADE" });

// Buildings and BuldingAsset
db.building.hasMany(db.buildingAsset, {foreignKey: "buildingId", onDelete: "CASCADE"});
db.buildingAsset.belongsTo(db.building, {foreignKey: "buildingId", onDelete: "CASCADE"});

//Room and Room Asset
db.room.hasMany(db.roomAsset, {foreignKey: "roomId", onDelete: "CASCADE"});
db.roomAsset.belongsTo(db.room, {foreignKey: "roomId", onDelete: "CASCADE"});

//Building and Rooms
db.building.hasMany(db.room, {foreignKey: "buldingId", onDelete: "CASCADE"});
db.room.belongsTo(db.building, {foreignKey: "buldingId", onDelete: "CASCADE"});

//Person and PersonAsset
db.person.hasMany(db.personAsset, {foreignKey: "personId", onDelete: "CASCADE"});
db/personAsset.belongsTo(db.personAsset, {foreignKey: "personId", onDelete: "CASCADE "});

//BuildingAsset and SerializedAsset
db.buildingAsset.hasMany(db.serializedAsset, {foreignKey: "serialAssetId", onDelete: "CASCADE"});
db.serializedAsset.belongsTo(db.buildingAsset, {foreignKey: "buildingId", onDelete: "CASCADE"})

//RoomAsset and SerializedAsset
db.roomAsset.hasMany(db.serializedAsset, {foreignKey: "serialAssetId", onDelete: "CASCADE"});
db.serializedAsset.belongsTo(db.roomAsset, {foreignKey: "roomId", onDelete: "CASCADE"});

//SerializedAsset and Barcode
db.serializedAsset.hasMany(db.barcode, {foreignKey: "serialAssetId", onDelete: "CASCADE"});
db.barcode.belongsTo(db.serializedAsset, {foreignKey: "serialAssetId", onDelete: "CASCADE"});

//AssetCat and AssetType
db.assetCat.hasMany(db.assetType, {foreignKey: "catId", onDelete: "CASCADE"});
db.assetType.belongsTo(db.assetCat, {foreignKey: "catId", onDelete: "CASCADE"});

//AssetType and AssetProfile
db.assetType.hasMany(db.assetProfile, {foreignKey: "typeId", onDelete: "CASCADE"});
db.assetProfile.belongsTo(db.assetType, {foreignKey: "typeId", onDelete: "CASCADE"});

//AssetProfile and ProfileData
db.assetProfile.hasMany(db.profileData, {foreignKey: "profileId", onDelete: "CASCADE"});
db.profileData.belongsTo(db.assetProfile, {foreignKey: "profileId", onDelete: "CASCADE"});

//Asset Profile and SerializedAsset
db.assetProfile.hasMany(db.serializedAsset, {foreignKey: "profileId", onDelete: "CASCADE"});
db.serializedAsset.belongsTo(db.assetProfile, {foreignKey: "profileId", onDelete: "CASCADE"});

//Log and LogType
db.logType.hasMany(db.log, {foreignKey: "logTypeId", onDelete: "CASCADE"});
db.log.belongsTo(db.logType, {foreignKey: "logTypeId", onDelete: "CASCADE"});

//PersonAsset and Log
db.personAsset.hasMany(db.log, {foreignKey: "personAssetId", onDelete: "CASCADE"});
db.log.belongsTo(db.personAsset, {foreignKey: "personAssetId", onDelete: "CASCADE"});

//Warranty and SerializedAsset
db.serializedAsset.hasOne(db.warranty, {foreignKey: "serialAssetId", onDelete: "CASCADE"});
db.warranty.belongsTo(db.serializedAsset, {foreignKey: "serialAssetId", onDelete: "CASCADE"});

//Lease and SerializedAsset
db.serializedAsset.hasOne(db.service, {foreignKey: "serialAssetId", onDelete: "CASCADE"});
db.lease.belongsTo(db.serializedAsset, {foreignKey: "serialAssetId", onDelete: "CASCADE"});

//Service and SerializedAsset
db.serializedAsset.hasMany(db.lease, {foreignKey: "personAssetId", onDelete: "CASCADE"});
db.service.belongsTo(db.personAsset, {foreignKey: "personAssetId", onDelete: "CASCADE"});


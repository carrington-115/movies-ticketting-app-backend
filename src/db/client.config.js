const { MongoClient } = require("mongodb");
const { dbKey } = require("./dbKey.config");
const client = new MongoClient(dbKey);

module.exports = { client };

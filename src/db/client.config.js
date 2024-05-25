const { MongoClient } = require("express");
const { dbKey } = require("./dbKey.config");
const client = MongoClient(dbKey);

module.exports = { client };

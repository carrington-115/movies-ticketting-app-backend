const { MongoClient } = require("mongodb");
const { dbKey } = require("./dbKey.config");
const client = new MongoClient(dbKey);

const connectToDb = async () => {
  try {
    await client.connectToDb();
    console.log("connected to the database");
  } catch (error) {
    console.error(error);
  }
};

module.exports = [connectToDb];

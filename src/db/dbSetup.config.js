const { MongoClient } = require("mongodb");
const { dbKey } = require("./dbKey.config");
const client = new MongoClient(dbKey);

const connectToDb = async () => {
  try {
    await client.connectToDb();
  } catch (error) {
    console.error(error);
  }
};

module.exports = [connectToDb];

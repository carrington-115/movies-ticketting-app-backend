require("dotenv").config();
const { MongoClient } = require("mongodb");
const { dbKey } = require("./dbKey.config");
const client = new MongoClient(dbKey);

const connectToDb = async () => {
  try {
    await client.connect();
    console.log("\n\nConnected to the database\n\n");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectToDb };

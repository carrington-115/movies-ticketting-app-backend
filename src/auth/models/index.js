require("dotenv").config({ path: "../../../.env" });
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.API_KEY);
const bcrypt = require("bcrypt");
const clientSession = client.startSession();
const accountCollection = client
  .db(process.env.ACCOUNT_COL)
  .collection("users");

class DatabaseAuth {
  constructor() {}

  async getUserByUsername(username) {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const user = await accountCollection.findOne({ username: username });
      return user;
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
  async getUserById(id) {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const user = await accountCollection.findOne({ _id: ObjectId(id) });
      return user;
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
  async createUser(username, password) {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await accountCollection.insertOne({
        username: username,
        password: hashedPassword,
      });
      return newUser.insertedId;
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
}

module.exports = DatabaseAuth;

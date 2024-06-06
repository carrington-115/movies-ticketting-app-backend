require("dotenv").config({ path: "../../../.env" });
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.API_KEY);
const clientSession = client.startSession();
const dbName = "accounts";
const accountCollection = client
  .db(process.env.ACCOUNT_COL)
  .collection("users");

class DatabaseAuth {
  constructor(username, id, password) {
    this.username = username;
    this.id = id;
    this.password = password;
  }

  async getUserByUsername() {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const user = await accountCollection.findOne({ username: this.username });
      return user;
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
  async getUserById() {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const user = await accountCollection.findOne({ _id: ObjectId(this.id) });
      return user;
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
  async createUser() {
    clientSession.startTransaction();
    try {
      await clientSession.commitTransaction();
      const newUser = await accountCollection.insertOne({
        username: this.username,
        password: this.password,
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

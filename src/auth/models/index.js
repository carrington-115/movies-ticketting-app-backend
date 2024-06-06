require("dotenv").config({ path: "../../../.env" });
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.API_KEY);
const clientSession = client.startSession();

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
    } catch (error) {
      await clientSession.abortTransaction();
      throw new Error(error);
    } finally {
      await clientSession.endSession();
    }
  }
}

module.exports = DatabaseAuth;

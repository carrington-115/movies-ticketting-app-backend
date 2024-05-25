const { client } = require("./client.config");

const session = client.startSession();

/*
    This file has two main functions to get users using 2 main methods
    * by getting all the users
    * by getting the users with a query
    * query: id, name, emal
*/

const getAllUsers = async () => {
  session.startTransaction();
  try {
    const usersCollection = client.db("sample_mflix").collection("users");
    const returnedUsers = usersCollection.find().limit(50);
    const users = returnedUsers.map((user) => {
      const { _id, name, email, password } = user;
      return { id: _id, name: name, email: email, password: password };
    });
    await session.commitTransaction();
    return users;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};
const getUsersByQuery = async (name, email, id) => {
  session.startTransaction();
  try {
    const usersCollection = client.db("sample_mflix").collection("users");
    const usersQueryResults = usersCollection.aggregate([
      {
        $match: {
          id: id,
          name: name,
          email: email,
        },
      },
    ]);
    await session.commitTransaction();
    return usersQueryResults;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

module.exports = { getAllUsers, getUsersByQuery };
const { connectToDb } = require("./dbSetup.config");

const main = async () => {
  try {
    await connectToDb();
    console.log("The database is connected");
  } catch (error) {
    console.error(error);
  }
};

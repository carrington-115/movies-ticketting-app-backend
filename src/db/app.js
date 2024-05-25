require("dotenv").config();
const { testFunc } = require("./app.test");
const { connectToDb } = require("./dbSetup.config");

const main = async () => {
  try {
    await connectToDb();
    testFunc();
  } catch (error) {
    console.error(error);
  }
};

main();

const { connectToDb } = require("./dbSetup.config");
const { getAllUsers } = require("./users");

const main = async () => {
  try {
    await connectToDb();
    const users = await getAllUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};

main();

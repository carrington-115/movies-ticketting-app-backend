require("dotenv").config();
const { connectToDb } = require("./dbSetup.config");
const { getAllUsers } = require("./users");

const main = async () => {
  try {
    await connectToDb();
    const users = await getAllUsers();
    users.forEach((user) => {
      const { id, name, email, password } = user;
      console.log(`
      id: ${id}
      name: ${name}
      email: ${email}
      password: ${password}
      `);
    });
  } catch (error) {
    console.error(error);
  }
};

main();

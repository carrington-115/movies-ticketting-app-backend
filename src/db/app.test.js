const { getAllUsers } = require("./users");

const testFunc = async () => {
  try {
    const users = await getAllUsers();
    // users.forEach((user) => {
    //   const { id, name, email, password } = user;
    //   console.log(`
    //     id: ${id}
    //     name: ${name}
    //     email: ${email}clear
    //     password: ${password}
    //     `);
    // });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

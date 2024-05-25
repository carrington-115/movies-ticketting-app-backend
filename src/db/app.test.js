const { getAllUsers, getUsersByQuery } = require("./users");

const testFunc = async () => {
  try {
    const user = await getUsersByQuery({
      id: "59b99db6cfa9a34dcd7885bc",
      name: "Jorah Mormont",
      email: "iain_glen@gameofthron.es",
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

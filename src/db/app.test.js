const { getAllMovies } = require("./functions/movies");
const { getAllUsers, getUsersByQuery } = require("./functions/users");

const testFunc = async () => {
  try {
    const movies = await getAllMovies();
    movies.forEach((movie) => console.log(movie));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

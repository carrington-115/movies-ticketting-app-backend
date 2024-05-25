const { getAllMovies, getMoviesWithId } = require("./functions/movies");
const { getAllUsers, getUsersByQuery } = require("./functions/users");

const testFunc = async () => {
  try {
    const movies = await getMoviesWithId({ id: "573a1391f29313caabcd6f98" });
    movies.forEach((movie) => console.log(movie));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

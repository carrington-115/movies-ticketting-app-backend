const {
  getAllMovies,
  getMoviesWithId,
  filterMoviesByTitleAndGenres,
  filterMoviesWithDate,
} = require("./functions/movies");
const {
  getAllUsers,
  getUsersByQuery,
  getAllUserComments,
} = require("./functions/users");

const testFunc = async () => {
  const userComments = await getAllUserComments({
    name: "Taylor Scott",
    email: "taylor_scott@fakegmail.com",
    movieId: "573a139af29313caabceef40",
  });
  userComments.forEach((comment) => {
    console.log(comment);
  });
  try {
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

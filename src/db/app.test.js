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

const {
  getAllTheaters,
  getTheatersByAddress,
  getTheatersByGPS,
} = require("./functions/theaters");

const testFunc = async () => {
  try {
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

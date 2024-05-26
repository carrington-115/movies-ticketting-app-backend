const {
  getAllMovies,
  getMoviesWithId,
  filterMoviesByTitleAndGenres,
  filterMoviesWithDate,
} = require("./functions/movies");
const { getAllUsers, getUsersByQuery } = require("./functions/users");

const testFunc = async () => {
  try {
    const movies = await filterMoviesWithDate({
      year: 2000,
      lastupdated: "2015-08-29 00:15:18.047000000",
      released: "2000-02-18T00:00:00.000Z",
    });
    // console.log(movies);
    movies.forEach((movie) => console.log(movie));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

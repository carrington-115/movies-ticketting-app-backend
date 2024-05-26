const {
  getAllMovies,
  getMoviesWithId,
  filterMoviesByTitleAndGenres,
} = require("./functions/movies");
const { getAllUsers, getUsersByQuery } = require("./functions/users");

const testFunc = async () => {
  try {
    const movies = await filterMoviesByTitleAndGenres({
      genres: ["Drama", "Adventure", "Fantasy", "Family", "Drama", "Horror"],
    });
    // console.log(movies);
    movies.forEach((movie) => console.log(movie));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

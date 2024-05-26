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
    // const theaters = await getAllTheaters();
    // const theaters = await getTheatersByAddress({
    //   street: "45235 Worth Ave.",
    //   city: "California",
    //   state: "MD",
    //   zipcode: "20619",
    // });
    const theaters = await getTheatersByGPS({
      xCord: -92.480994,
      yCord: 44.007071,
    });
    theaters.forEach((theater) => console.log(theater));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { testFunc };

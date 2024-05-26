const { ObjectId } = require("mongodb");
const { client } = require("../client.config");
const session = client.startSession();

/*
    In this file, we can perform operations on the movies database
    * We can get all the movies through a function and specify our format of output
    * We can get movies by querying
    * id, plot, genres, title, released, writers, year, lastupdated
*/
const movieOutput = {
  _id: 1,
  plot: 1,
  genres: 1,
  cast: 1,
  poster: 1,
  title: 1,
  fullplot: 1,
  released: 1,
  directors: 1,
  writers: 1,
  lastupdated: 1,
  year: 1,
  countries: 1,
};

const getAllMovies = async () => {
  session.startTransaction();
  try {
    const moviesCollection = client.db("sample_mflix").collection("movies");
    const allMovies = moviesCollection.aggregate([
      { $limit: 50 },
      {
        $project: movieOutput,
      },
    ]);
    await session.commitTransaction();
    return allMovies;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

const getMoviesWithId = async (movieData) => {
  session.startTransaction();
  const { id } = movieData;
  try {
    const allMovies = client.db("sample_mflix").collection("movies");
    const movie = allMovies.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      { $project: movieOutput },
    ]);
    await session.commitTransaction();
    return movie;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

const filterMoviesByTitleAndGenres = async (movieData) => {
  session.startTransaction();
  const { title, genres } = movieData;

  try {
    const moviesCollection = client.db("sample_mflix").collection("movies");
    let movies;
    if (title && !genres) {
      movies = moviesCollection.aggregate([
        {
          $match: {
            title: title,
          },
        },
        { $limit: 50 },
        { $project: movieOutput },
      ]);
    } else if (genres && !title) {
      movies = moviesCollection.aggregate([
        {
          $match: {
            genres: { $in: genres },
          },
        },
        { $limit: 50 },
        { $project: movieOutput },
      ]);
    } else {
      movies = moviesCollection.aggregate([
        {
          $match: {
            title: title,
            genres: { $in: genres },
          },
        },
        { $limit: 50 },
        { $project: movieOutput },
      ]);
    }

    await session.commitTransaction();
    return movies;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

module.exports = {
  getAllMovies,
  getMoviesWithId,
  filterMoviesByTitleAndGenres,
};

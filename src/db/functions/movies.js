const { client } = require("../client.config");
const session = client.startSession();

/*
    In this file, we can perform operations on the movies database
    * We can get all the movies through a function and specify our format of output
    * We can get movies by querying
    * id, plot, genres, title, released, writers, year, lastupdated
*/

const getAllMovies = async () => {
  session.startTransaction();
  try {
    const moviesCollection = client.db("sample_mflix").collection("movies");
    const allMovies = moviesCollection.aggregate([
      { $limit: 50 },
      {
        $project: {
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
        },
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

module.exports = { getAllMovies };

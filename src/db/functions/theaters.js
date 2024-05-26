const { client } = require("../client.config");
const session = client.startSession();

const getAllTheaters = async () => {
  session.startTransaction();
  try {
    const theatersCollection = client.db("sample_mflix").collection("theaters");
    const theaters = theatersCollection.aggregate([{ $limit: 50 }]);
    await session.commitTransaction();
    return theaters;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

const getTheatersByAddress = async (theaterAddress) => {
  session.startTransaction();
  const { street, city, zipcode, state } = theaterAddress;
  try {
    let theaters;
    const theatersCollection = client.db("sample_mflix").collection("theaters");
    if (street && city && zipcode && state) {
      theaters = theatersCollection.aggregate([
        {
          $match: {
            "location.address.street1": street,
            "location.address.city": city,
            "location.address.zipcode": zipcode,
            "location.address.state": state,
          },
        },
        { $limit: 50 },
      ]);
    } else {
      theaters = theatersCollection.aggregate([{ $limit: 50 }]);
    }
    await session.commitTransaction();
    return theaters;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

const getTheatersByGPS = async (theaterGPS) => {
  session.startTransaction();
  const { xCord, yCord } = theaterGPS;
  try {
    let theaters;
    const theatersCollection = client.db("sample_mflix").collection("theaters");
    if ((xCord, yCord)) {
      theaters = theatersCollection.aggregate([
        {
          $match: {
            "location.geo.coordinates": [xCord, yCord],
          },
        },
      ]);
    } else {
    }
    await session.commitTransaction();
    return theaters;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

module.exports = { getAllTheaters, getTheatersByAddress, getTheatersByGPS };

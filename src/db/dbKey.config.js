require("dotenv").config();
const dbKey = process.env.MONGODB_API_KEY;

module.exports = { dbKey };

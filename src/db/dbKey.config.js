const dotenv = require("dotenv");
dotenv.config();
const dbKey =
  process.env.API_KEY |
  "mongodb+srv://MarkCarringotn:Carrington-115@cluster0.uqg27gz.mongodb.net/";
console.log(dbKey);
module.exports = { dbKey };

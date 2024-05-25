require("dotenv").config({ path: "../../.env" });
const dbKey = process.env.API_KEY;

module.exports = { dbKey };

require("dotenv").config({ path: "../../../.env" });
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.API_KEY);
const authRouter = require("./routes");
const passport = require("../config/passport");

client
  .connect()
  .then(() => console.log("The database client is connected"))
  .catch((err) => console.error(err));

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({ client: client, dbName: process.env.DB_NAME }),
    cookie: { secure: false },
  }),
  cookieParser(),
  passport.initialize(),
  passport.session(),
]);

app.use("/auth", authRouter);

app.listen(process.env.PORT, () => console.log("The app is running"));

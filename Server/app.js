const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const mongoPath =
  "mongodb+srv://decode137:" +
  process.env.DB_PASSWORD +
  "@yostock.71nvz.mongodb.net/yostock?retryWrites=true&w=majority";

// const mongoPath =  "mongodb://localhost:27017/yostock";

// Connect to MongoDb Atlas
mongoose.connect(mongoPath, {
  //useMongoClient:true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// .then(() => {
//   console.log("database connected successfully!!!");
// });

mongoose.Promise = global.Promise;

// Logging Requests to console
app.use(logger("dev"));

// Handle Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle Cross-origin resource sharing (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*" /* http://localhost:3000 */);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, x-requested-with, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, GET, PATCH, OPTIONS, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

// Setting Routes
const scriplistRoutes = require("./api/routes/scriplist");
const newsRoutes = require("./api/routes/news");
const userRoutes = require("./api/routes/user");
const searchIndexRoutes = require("./api/routes/searchindex");

// const scripquote = require("./api/routes/scripquote");
// const historyRoutes = require("./api/routes/scriphistory");

// Handle Requests from client
app.use("/scriplists", scriplistRoutes);
app.use("/news", newsRoutes);
app.use("/user", userRoutes);
app.use("/sindex", searchIndexRoutes);

//app.use("/marketsummary", marketSummaryRoutes);
//app.use("/quote", scripquote);
//app.use("/history", historyRoutes);

// Handle Errors for missing routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status(404);
  next(error);
});

// Handle Errors for application
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

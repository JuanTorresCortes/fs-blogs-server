// Import required dependencies
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// cors is imported to enable Cross-Origin Resource Sharing (CORS)
const cors = require("cors");

// dotenv is imported to load environment variables from a .env file
require("dotenv").config();

// Connect to MongoDB
// The mongooseConnect function is called to establish a connection to the MongoDB database.
const { mongooseConnect } = require("./db");
mongooseConnect();

// Import routers
// These router modules define the logic for handling requests and generating responses for specific routes.
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// imports the router module for handling blog-related routes.
const blogsRouter = require("./routes/blogs");

// Create the Express application
// An Express application is created by calling express() and assigning it to the app variable. The app object represents your Express application.
var app = express();

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
// app.use(cors()) enables Cross-Origin Resource Sharing.
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route handlers
// Each route handler specifies a path and a callback function to handle the request and generate a response. This function can be defined inline or imported from separate modules.
app.use("/", indexRouter);
app.use("/users", usersRouter);
// sets the router for the '/blogs' path.
app.use("/blogs", blogsRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

// In summary, the app.js file sets up the configuration,
// middleware, route handlers, and error handling for your
// Express application. It defines how incoming requests are processed, how responses are generated, and how errors are handled.

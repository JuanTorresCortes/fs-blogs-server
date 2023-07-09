const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

// Define the blogs schema
const blogsSchema = new mongoose.Schema({
  _id: { type: String, default: uuid }, // Unique ID generated using uuid
  title: { type: String, required: true }, // Title of the blog (required)
  author: { type: String, required: true},
  content: { type: String, required: true }, // Content of the blog (required)
  lastModified: { type: Date, default: Date.now , required: true}, // Timestamp for last modification (default: current date/time)
});

// Create the Blog model using the blogs schema
const Blog = mongoose.model("Blog", blogsSchema);

module.exports = Blog;

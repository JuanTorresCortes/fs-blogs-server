const express = require("express");
const router = express.Router();
const { createBlog, allBlogs } = require("../controller/blogsController");

// Endpoint to return a simple "hello" message
router.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello from Express" });
});

// Endpoint to retrieve all blogs
router.get("/all-blogs", allBlogs);

// Endpoint to create a new blog
router.post("/new-blog", createBlog);

module.exports = router;

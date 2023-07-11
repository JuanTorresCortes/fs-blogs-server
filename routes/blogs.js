const express = require("express");
const router = express.Router();
const {
  createBlog,
  allBlogs,
  editBlog,
  deleteBlog,
} = require("../controller/blogsController");

// Endpoint to return a simple "hello" message
router.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello from Express" });
});

// Endpoint to retrieve all blogs
router.get("/all-blogs", allBlogs);

// Endpoint to create a new blog
router.post("/new-blog", createBlog);

// Endpoint to retrieve blog by id
router.put("/edit/:id", editBlog);

router.delete("/delete/:id", deleteBlog);

module.exports = router;

const express = require("express");
const router = express.Router();
const {createBlog, allBlogs} = require("../controller/blogsController")

router.get("/hello", (req, res) => {
  res.status(200).json({ message: "hello form express" });
});

router.get ("/all-blogs", allBlogs)
router.post("/new-blog", createBlog)

module.exports = router;

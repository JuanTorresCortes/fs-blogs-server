const Blog = require("../model/Blog");

// Controller function to create a new blog
const createBlog = async (req, res) => {
  try {
    // Create a new Blog instance with the data from the request body
    const newBlog = await new Blog(req.body);

    // Save the new blog to the database
    const savedBlog = await newBlog.save();

    // Return a success response with the saved blog data
    res.status(200).json({ success: true, data: savedBlog });
  } catch (error) {
    console.log(error);
    // Return an error response if there's an error during the process
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller function to retrieve all blogs
const allBlogs = async (req, res) => {
  try {
    // Find all blogs in the database
    const allBlogs = await Blog.find({});

    // Return a success response with the retrieved blogs data
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    console.log(error);
    // Return an error response if there's an error during the process
    res.status(500).json({ success: false, message: error.message });
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;

    req.body.lastModified = Date.now();

    // Find the blog by ID in the database
    const updateBlog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!updateBlog) {
      return res.status(400).json({ message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: updateBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, data: deletedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  allBlogs,
  editBlog,
  deleteBlog,
};

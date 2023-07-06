const Blog = require("../model/Blog");

const createBlog = async (req, res) => {
    try {
        const newBlog = await new Blog(req.body)
        const saveBlog = await newBlog.save();
        res.status(200).json({ success: true, data: saveBlog})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, massage: error.message})
    }
}

const allBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        res.status(200).json({ success: true, data: allBlogs})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, massage: error.message})
    }
}

module.exports = {
    createBlog, 
    allBlogs,
}
const mongoose = require("mongoose")
const { v4: uuid } = require("uuid")

const blogsSchema = new mongoose.Schema({
    _id: {type: String, default: uuid },
    title: {type: String, require: true},
    content: {type: String, require: true},
    lastModified: { type: Date, default: Date.now },
})

const Blog = mongoose.model("Blog", blogsSchema);
module.exports = Blog;
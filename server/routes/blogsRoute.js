const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

//Get all blog posts
router.get("/", async (req, res) => {
  try {
    // Fetch all blog posts from the database sorted by createdAt in descending order
    const blogs = await Blog.find().sort({ createdAt: -1 });
    // Respond with status 200 and the fetched blog posts
    res.status(200).json({
      message: "All blog posts fetched successfully",
      data: blogs,
    });
  } catch (error) {
    // Respond with status 500 and an error message if an error occurs
    res.status(500).json({ message: error.message });
  }
});

// Get single blog based on id
router.get("/:id", async (req, res) => {
  try {
    // Fetch a single blog post based on the id parameter
    const blog = await Blog.findById(req.params.id);
    // Respond with status 200 and the fetched blog post
    res.status(200).json({
      message: "Blog post fetched successfully",
      data: blog,
    });
  } catch (error) {
    // Respond with status 500 and an error message if an error occurs
    res.status(500).json({ message: error.message });
  }
});

//Add a blog post
router.post("/", async (req, res) => {
  try {
    // Create a new blog post using the Blog model and the request body
    const blog = new Blog(req.body);
    // Save the blog post to the database
    await blog.save();
    // Respond with status 201 and a success message
    res.status(201).json({ message: "Post Added Successfully" });
  } catch (error) {
    // Respond with status 400 and an error message if an error occurs
    res.status(400).json({ messsage: error.message });
  }
});

// Edit a blog post
router.put("/:id", async (req, res) => {
  try {
    // Find a blog post by id and update it with the request body
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    // Respond with status 200 and a success message
    res.status(200).json({ message: "Blog post updated successfully" });
  } catch (error) {
    // Respond with status 400 and an error message if an error occurs
    res.status(400).json({ message: error.message });
  }
});

//delete a blog post
router.delete("/:id", async (req, res) => {
  try {
    // Find a blog post by id and delete it
    await Blog.findByIdAndDelete(req.params.id);
    // Respond with status 200 and a success message
    res.status(200).json({ message: "Post Deleted Successfully" });
  } catch (error) {
    // Respond with status 400 and an error message if an error occurs
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
});

// Export the router for use in the server file
module.exports = router;

const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

//Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      message: "All blog posts fetched successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get blog based on id
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      message: "Blog post fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add a blog post
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog Post Added Successfully" });
  } catch (error) {
    res.status(400).json({ messsage: error.message });
  }
});

// Edit a blog post
router.put("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Blog post updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete a blog post

router.delete("/:id", (req, res) => {
  res.send({ message: "delete a blog post api route", blogid: req.params.id });
});

module.exports = router;

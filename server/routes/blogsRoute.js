const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel")

//Get all blogs
router.get("/", (req, res) => {
  res.send({ message: "get all blog post api route" });
});

// Get blog based on id
router.get("/:id", (req, res) => {
  res.send({ message: "get a blog post by id api route", blogid: req.params.id });
  
});

//Add a blog post
router.post("/", async(req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog Post Added Successfully" });
  } catch (error) {
    res.status(400).json({ messsage: error.message });
  }
});

// Edit a blog post
router.put("/:id", (req, res) => {
  res.send({ message: "update a blog post api route", blogid: req.params.id });
});

//delete a blog post

router.delete("/:id", (req, res) => {
  res.send({ message: "delete a blog post api route", blogid: req.params.id });
});

module.exports = router;

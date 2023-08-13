const express = require("express");
const router = express.Router();

//Get all blogs
router.get("/", (req, res) => {
  res.send({ message: "get all blog post api route" });
});

// Get blog based on id
router.get("/:id", (req, res) => {
  res.send({ message: "get a blog post by id api route", blogid: req.params.id });
  
});

//Add a blog post

router.post("/", (req, res) => {
  res.send({ message: "add a blog post api route" });
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

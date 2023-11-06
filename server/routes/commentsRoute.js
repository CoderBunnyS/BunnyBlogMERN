const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create a new comment
router.post('/comments', async (req, res) => {
  try {
    const { username, email, text } = req.body;
    const comment = new Comment({
      username,
      email,
      text,
      createdAt: new Date(),
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Retrieve all comments
router.get('/:id/comments', async (req, res) => {
    try {
        console.log("You got some comments")
    } catch (error) {
        
    }

    // try {
    //   const comments = await Comment.find({ blogPost: req.params.blogPostId });
    //   res.json(comments);
    //   console.log("you got some comments")
    // } catch (err) {
    //   res.status(500).json({ message: err.message });
    // }
  });

module.exports = router;

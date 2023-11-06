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
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

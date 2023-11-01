const express = require('express');
const router = express.Router();

//get all comments
router.get(`/{id}`, (req, res) => {
    res.send('Get all comments');
});
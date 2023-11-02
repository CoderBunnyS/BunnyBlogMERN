const express = require('express');
const router = express.Router();
const comments = require("../models/commentModel");

// //get all comments
// router.get(`/{id}`, (req, res) => {
//     res.send('Get all comments');
// });

// Create a new document in the collection
router.post('/create', comments.create);

// Retrieve data from the collection
router.get('/read', comments.read);

// Update a document in the collection
router.put('/update/:id', comments.update);

// Delete a document from the collection
router.delete('/delete/:id', comments.delete);

module.exports = router;
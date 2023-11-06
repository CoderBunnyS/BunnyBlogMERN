import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: '', email: '', text: '' });

  const handleCommentChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = () => {
    // You can add code here to send the comment to the server and save it to the database.
    // After a successful save, you can update the 'comments' state with the new comment.
  };

  return (
    <div>
      <h2>Comments</h2>
      <div className="comment-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newComment.username}
          onChange={handleCommentChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={newComment.email}
          onChange={handleCommentChange}
        />
        <textarea
          name="text"
          placeholder="Your comment"
          value={newComment.text}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.username} ({comment.email})</p>
            <p>{comment.text}</p>
            <p>Posted on: {comment.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

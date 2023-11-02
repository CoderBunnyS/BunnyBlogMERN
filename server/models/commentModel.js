const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        required: false,
        trim: true,
      },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comments", commentSchema);

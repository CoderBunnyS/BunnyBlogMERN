const mongoose = require("mongoose");

// Define the blog schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

// Export the model, providing access to the schema from other parts of the app
module.exports = mongoose.model("blogs", blogSchema);

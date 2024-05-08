// Importing necessary libraries and frameworks
const express = require("express");
const app = express();
const port = process.env.PORT || 8000; // Define the port for the server to listen on
app.use(express.json()); // Middleware to parse incoming requests with JSON payloads

// Load environment variables from the .env file
require("dotenv").config();

// Connect to the database
const dbConnect = require("./config/dbConnect");

// Blog routes handling
app.use("/api/blogs", require("./routes/blogsRoute"));

//Importing path modules for file path operations
const path = require("path");

// Ensure __dirname is set to the directory of the current module
__dirname = path.resolve(path.dirname(""));

// Production specific settings
if (process.env.NODE_ENV === "production") {
  //Define the path to the client application build
  const clientPath = path.join(__dirname, "../client/dist");
  app.use(express.static(clientPath)); // Serve static files from the client build directory

  // Serve the React application index.html file for all routes
  app.get("*", (req, res) => {
    // Correctly reference the path using clientPath
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

// Start the server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

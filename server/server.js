//script to start backend server
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

require('dotenv').config();
const dbConnect = require("./config/dbConnect");

app.use("/api/blogs", require("./routes/blogsRoute"));

const path = require("path");
// Ensure __dirname is set to the directory of the current module
__dirname = path.resolve(path.dirname(''));

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientPath));
  
  app.get("*", (req, res) => {
    // Correctly reference the path using clientPath
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

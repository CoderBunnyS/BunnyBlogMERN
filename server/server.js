//script to start backend server
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())

require('dotenv').config();
const dbConnect = require("./config/dbConnect")

app.use("/api/blogs", require("./routes/blogsRoute"));

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, '../client/dist');
  app.use(express.static(path.join(clientPath)));

    // Handle all non-API routes by returning the index.html file
    app.get(/^(?!\/api\/).*/, (req, res) => {  // Regex to ignore /api paths
      res.sendFile(path.join(clientPath, "index.html"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  // });
} 
//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

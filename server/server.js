//script to start backend server
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())


const dbConnect = require("./config/dbConnect")

app.use("/api/blogs", require("./routes/blogsRoute"));

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
} 
//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

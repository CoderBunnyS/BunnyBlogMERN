//script to start backend server
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require('dotenv').config();
const dbConnect = require("./config/dbConnect")

app.get("/", (req, res) => {
  res.send({ message: "Backend MERN API Server successfully started" });
});

app.use("/api/blogs", require("./routes/blogsRoute"));
//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));

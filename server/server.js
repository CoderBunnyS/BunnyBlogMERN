//script to start backend server
const express = require('express');

const app = express();

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send({ message: "Backend MERN API Server successfully started"})
})
//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));
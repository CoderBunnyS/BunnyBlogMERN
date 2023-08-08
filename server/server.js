//script to start backend server
const express = require('express');

const app = express();

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Hello World from backend server")
})
//nodemon server/server
app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));
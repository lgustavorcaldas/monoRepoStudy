const express = require('express');
const app = express();
const port = 8080;

app.use("/", express.static("./src/home"))

app.listen(port, console.log(`FrontEnd running at port: ${port}`))
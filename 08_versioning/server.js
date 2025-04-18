const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from the server");
});

app.get("/about", (req, res) => {
    res.send("Hello word from the ABOUT Page...");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
});
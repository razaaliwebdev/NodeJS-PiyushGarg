const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    return res.send(`Hello world from about page , hey ${req.query.name} and you are ${req.query.age} years old.`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on the port:${port}`);
});
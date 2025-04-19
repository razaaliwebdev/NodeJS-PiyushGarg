const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Global Middlewares
app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}:${req.ip}: ${req.method}: ${req.path}\n`, (error, data) => {
        next();
    });
});

// app.use((req, res, next) => {
//     console.log("Hello world from the middleware 2 ", req.myUsername);
//     // res.json({ message: "Working fine middleware 2" });
//     next();
// });


// Routes 
app.get("/", (req, res) => {
    return res.send("Hello World from the express app");
});

app.get("/users", (req, res) => {
    return res.json(users);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT:${PORT}`);
});
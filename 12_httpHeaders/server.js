const express = require("express");
const users = require("./MOCK_DATA.json");


const app = express();

app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World from the server and it's working fine");
});

app.get("/api/users", (req, res) => {
    // res.setHeader("myName", "Raza Ali"); // Custom Header
    res.setHeader("X-MyName", "Raza A"); 
    // Always Add X to Custom Headers
    console.log(req.headers);
    return res.status(200).json(users);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT:${PORT}`);
});



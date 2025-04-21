const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));

// Routes
// Test Route
app.get("/", (req, res) => {
    res.send(
        "Hello World from the server and in this we are learning about STATUS CODES"
    );
});

// Get all Users Route
app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

// Get single User Route
app.get("/api/users/:id", (req, res) => {
    // const id = Number(req.params.id);
    const id = + req.params.id;
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
});

// Create New User
app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    if (
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ message: "All Fields are required.." });
    }
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        return res.status(201).json({ status: "success", id: users.length });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT:${PORT}`);
});

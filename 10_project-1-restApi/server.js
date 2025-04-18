const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => {
        return `<li>${user.first_name}</li>`
    }).join("")}
        </ul>
    `;
    return res.send(html);
});

// REST API POINTS
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = +req.params.id;
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    })

    .patch((req, res) => {
        const id = +req.params.id;
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update only the fields sent
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Failed to update user." });
            }
            return res.json({ status: "User updated", user: updatedUser });
        });
    })

    .delete((req, res) => {
        const id = +req.params.id;
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        users.splice(userIndex, 1);

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Failed to delete user." });
            }
            return res.json({ status: "User deleted successfully" });
        });
    });




app.post("/api/users", (req, res) => {
    // TODO : Create  new user
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        return res.json({ status: `Success `, id: users.length + 1 });
    });
});

// app.patch("/api/users/:id", (req, res) => {
//     // Edit the user with ID
//     return res.json({ status: "PENDDING" });
// });

// app.delete("/api/users/:id", (req, res) => {
//     // Delete the user with ID
//     return res.json({ status: "PENDDING" });
// });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT:${PORT}`);
});
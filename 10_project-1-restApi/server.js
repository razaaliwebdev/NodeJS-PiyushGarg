const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();


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

app.route("/api/users/:id").get((req, res) => {
    // const id = Number(req.params.id);
    const id = + req.params.id;
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
    .patch((req, res) => {
        return res.status({ status: "PENDDING" });
    })
    .delete((req, res) => {
        return res.json({ status: "PENDDING" });
    });



app.post("/api/users", (req, res) => {
    // TODO : Create  new user
    return res.json({ status: "PENDDING..." });
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
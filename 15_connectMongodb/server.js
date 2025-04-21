const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlware
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World from the TEST Route");
});

// User Schema 
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requird: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Create New User
app.post("/api/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).json({ message: "All fields are required..." });
        };
        const user = new User({ name, email, password });
        await user.save();
        return res.status(201).json({ message: "User Created Succesfully", user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
});

// Get All Users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get One User
app.get("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Update the User
app.patch("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    };
    return res.status(200).json({ message: "User Updated Successfully.", updatedUser });
});

// Delete User 
app.delete("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete({ _id: id });
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found." });
        };
        return res.status(200).json({ message: "User Deleted Succesfully", deleteUser });
    } catch (error) {
        return res.status(200).json({ message: "User Updated Successfully.", updatedUser });
    }
});

// Render All The Users using SSR
app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.find({});
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>User List</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(to right, #f8fafc, #e2e8f0);
              padding: 2rem;
            }
            h1 {
              text-align: center;
              color: #1e293b;
              margin-bottom: 2rem;
            }
            ul {
              list-style: none;
              padding: 0;
              max-width: 600px;
              margin: auto;
            }
            li {
              background: white;
              margin-bottom: 1rem;
              padding: 1rem 1.5rem;
              border-radius: 0.75rem;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
              transition: transform 0.2s ease;
            }
            li:hover {
              transform: translateY(-2px);
              background-color: #f1f5f9;
            }
            h2 {
              margin: 0;
              color: #334155;
              font-size: 1.1rem;
            }
            span {
              color: #64748b;
              font-size: 0.9rem;
            }
          </style>
        </head>
        <body>
          <h1>All Users</h1>
          <ul>
            ${allUsers
                .map(
                    (user) =>
                        `<li><h2>${user.name}</h2><span>${user.email}</span></li>`
                )
                .join("")}
          </ul>
        </body>
        </html>
      `;

        return res.status(200).send(html);
    } catch (error) {
        return res.status(500).send("<h1>Internal Server Error</h1>");
    }
});


// Database Connection
const mongoUrl = `mongodb://127.0.0.1:27017/testing`;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log(`MongoDB Connected...`);
    } catch (error) {
        console.log(`Failed Connect DB:${error}`);
        process.exit(1);
    }
};

connectDB().then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on the port:${PORT}`);
    });
}).catch((error) => {
    console.log("MongoDB Connection ERROR", error);
});


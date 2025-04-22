import express from 'express';
import connectDB from './db/db.js';
import "dotenv/config";
import router from './routes/userRoutes.js';
import logReqRes from './middlewares/index.js';


const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// Api Endpoints
// Test Route
app.get("/", (req, res) => {
    res.send("Hello world from the server and it's working fine");
});

app.use("/api/user", router);


// Database Connection
connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT:${PORT}`);
    });
}).catch((error) => {
    console.log("Failed to connect DB ...", error);
});
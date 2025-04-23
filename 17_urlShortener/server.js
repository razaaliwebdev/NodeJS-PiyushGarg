import express from 'express';
import connectDB from './db/db.js';
import "dotenv/config";
import urlRouter from './routes/urlRoutes.js';


const app = express();

// Middlewares
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Roures
app.use("/url", urlRouter);


// Database Connection
connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT:${PORT}`);
    })
}).catch((error) => {
    console.log(`MongoDB Connection error:${error}`);
});
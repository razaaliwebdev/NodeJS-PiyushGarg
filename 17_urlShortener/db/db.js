import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected...`);
    } catch (error) {
        console.error("Failed to connect DB , error:", error);
    }
};

export default connectDB;
import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    // Set strict query to false to avoid deprecation warnings
    mongoose.set('strictQuery', false);
    
    // If already connected, return
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    // If connecting, wait for it
    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        console.log('Using existing database connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000,
        });
        
        isConnected = true;
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        throw error;
    }
};

export default connectDB;
import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    // Set strict query to false to avoid deprecation warnings
    mongoose.set('strictQuery', false);
    
    if (!process.env.MONGODB_URI) {
        console.error('❌ MONGODB_URI environment variable is not defined!');
        throw new Error('MONGODB_URI environment variable is required');
    }
    
    // If already connected, return
    if (isConnected) {
        return;
    }

    // If connecting, wait for it
    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000,
        });
        
        isConnected = true;
        console.log("✅ MongoDB connected successfully");
        
    } catch (error) {
        console.log("❌ MongoDB connection failed:", error);
        throw error;
    }
};

export default connectDB;
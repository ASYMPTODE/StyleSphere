import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
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
        const options = {
            serverSelectionTimeoutMS: 10000, // 10 seconds
            socketTimeoutMS: 45000, // 45 seconds
            maxPoolSize: 10, // Maintain up to 10 socket connections
            bufferCommands: true, // Enable buffering for serverless
            bufferMaxEntries: 0, // Disable mongoose buffering when connection is lost
        };

        await mongoose.connect(process.env.MONGODB_URI, options);
        
        isConnected = true;
        console.log("MongoDB connected successfully");
        
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
            isConnected = false;
        });
        
        mongoose.connection.on('error', (err) => {
            console.log('MongoDB connection error:', err);
            isConnected = false;
        });
        
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        isConnected = false;
        throw error;
    }
};

export default connectDB;
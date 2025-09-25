import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    // Set strict query to false to avoid deprecation warnings
    mongoose.set('strictQuery', false);
    
    // Debug environment variables
    console.log('Environment check:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGODB_URI length:', process.env.MONGODB_URI?.length);
    
    if (!process.env.MONGODB_URI) {
        console.error('❌ MONGODB_URI environment variable is not defined!');
        console.error('Available env vars:', Object.keys(process.env).filter(key => key.includes('MONGO')));
        throw new Error('MONGODB_URI environment variable is required');
    }
    
    const mongoUri = process.env.MONGODB_URI;
    console.log('Using MongoDB URI:', mongoUri.substring(0, 20) + '...');  // Log partial URI for debugging
    
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
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(mongoUri, {
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
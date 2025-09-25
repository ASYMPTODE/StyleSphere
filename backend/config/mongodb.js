import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    // Set strict query to false to avoid deprecation warnings
    mongoose.set('strictQuery', false);
    
    // Debug: Log all environment variables that might contain MongoDB URI
    console.log('Environment variable check:');
    console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'EXISTS' : 'MISSING');
    console.log('MONGODB_URL:', process.env.MONGODB_URL ? 'EXISTS' : 'MISSING');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'EXISTS' : 'MISSING');
    
    // Try multiple possible environment variable names
    const mongoUri = process.env.MONGODB_URI || 
                    process.env.MONGODB_URL || 
                    process.env.DATABASE_URL;
    
    if (!mongoUri) {
        console.error('❌ No MongoDB URI found in environment variables!');
        console.error('Available env vars:', Object.keys(process.env).slice(0, 10));
        // Temporary fallback - REMOVE THIS IN PRODUCTION
        const fallbackUri = "mongodb+srv://sarthakkale1221_db_user:sarthak@cluster0.xobxnuj.mongodb.net/stylesphere?retryWrites=true&w=majority&appName=Cluster0";
        console.log('🔄 Using fallback URI for testing');
        
        if (isConnected || mongoose.connection.readyState === 1) {
            isConnected = true;
            return;
        }
        
        try {
            await mongoose.connect(fallbackUri, {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            });
            isConnected = true;
            console.log("✅ MongoDB connected with fallback URI");
            return;
        } catch (error) {
            console.log("❌ MongoDB fallback connection failed:", error);
            throw error;
        }
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
import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    mongoose.connection.on('error',(err) => {
        console.log("DB Connection Error:", err);
    })

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
    }

}

export default connectDB;
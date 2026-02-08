import mongoose  from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.BASE_URI);
        console.log('DATABASE MONGO CONNECTED');
    } catch (err) {
        console.error('Error connecting to DB:', err);
        process.exit(1);
    }
};
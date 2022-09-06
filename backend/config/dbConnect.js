import mongoose from "mongoose";

// Connect to MongoDB
const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
    });

    console.log('Connected to MongoDB Successfully'.yellow.bold.underline);
}

export default dbConnect;
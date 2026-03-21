import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongodbURI);
        console.log("DB connected with backend successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
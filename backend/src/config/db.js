import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY")
    } catch (error) {
        console.error("Error connecting DB",error);
        process.exit(1); //1 means exit with failure , and 0 means success
    }
}
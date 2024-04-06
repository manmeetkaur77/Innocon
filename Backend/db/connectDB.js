import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,



        });
        console.log(`\n MongoDB connected !! DB HOST: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MONGO  FAILED:${error.message}`);
        process.exit(1)
    }
}

export default connectDB
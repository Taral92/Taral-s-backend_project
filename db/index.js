import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";


const connectdb=async()=>{
    try {
        const connectionInsance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`mongodb connected !!! DB HOST:${connectionInsance.connection.host}`);
        
    } catch (error) {
        console.log('Mongodb Error:',error);
        process.exit(1);
    }
}  
export default connectdb;
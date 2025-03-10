import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB = async ()=>{
  try {
    const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstances.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed",error);
    process.exit(1);
  }
}

export default connectDB;
import mongoose from 'mongoose';

const dbConnect = async() => {
  try { 
    await mongoose.connect(process.env.MONGO_URL! as string);
    console.log("connected to db")
  } catch (error) {
    console.log("disconnected to db");
    process.exit(1)
  }

}

export default dbConnect;
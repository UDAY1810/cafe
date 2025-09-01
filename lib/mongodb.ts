// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(MONGODB_URI);
//     isConnected = true;
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//   }
// };

// export default connectDB;
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("❌ Please define the MONGODB_URI in .env.local");
// }

// let isConnected = false;

// export async function connectDB() {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(MONGODB_URI, { bufferCommands: false });
//     isConnected = true;
//     console.log("✅ MongoDB Connected");
//   } catch (error: any) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     throw error;
//   }
// }
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGODB_URI in .env.local");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, { bufferCommands: false });
    isConnected = true;
    console.log("✅ MongoDB Connected:", MONGODB_URI);
  } catch (error: any) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error;
  }
}


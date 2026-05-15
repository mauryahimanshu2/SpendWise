import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/expenseTracker");

    console.log("DB connected ✅");
  } catch (error) {
    console.error("DB connection failed ❌", error.message);
    process.exit(1);
  }
};
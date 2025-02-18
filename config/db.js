import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    return (opts = {
      bufferCommand: false,
    });
    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;

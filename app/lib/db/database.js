import mongoose from "mongoose";
let isConnected = false;
const connect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongo db is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "codeshare",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to mongo");
  } catch (error) {
    throw new Error("Could not connect to the database");
  }
};

export default connect;

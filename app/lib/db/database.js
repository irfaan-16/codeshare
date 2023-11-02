import mongoose from "mongoose";

const connect  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongo");
    } catch (error){
        throw new Error("Could not connect to the database");
    }
}

export default connect;

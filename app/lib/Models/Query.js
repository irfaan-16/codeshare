import mongoose from "mongoose";
import User from "./User";

const QuerySchema = new mongoose.Schema({
  title: String,
  code: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  desc: {
    type: String,
  },
  tags: {
    type: [String], // Define the type as an array of strings
    default: [], // Default value (empty array in this case)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Query = mongoose.models?.Query || mongoose.model("Query", QuerySchema);

module.exports = Query;

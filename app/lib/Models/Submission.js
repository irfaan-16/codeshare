import mongoose from "mongoose";
import User from "./User";

const submissionSchema = new mongoose.Schema({
  title: String,
  code: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  tags: {
    type: [String], // Define the type as an array of strings
    default: [], // Default value (empty array in this case)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: String,
});

const Submission =
  mongoose.models?.Submission || mongoose.model("Submission", submissionSchema);

module.exports = Submission;

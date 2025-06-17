import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);

import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  reason: { type: String, required: true },
  resumeUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('JobApplication', jobApplicationSchema);

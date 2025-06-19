import mongoose from 'mongoose';

const internshipApplicationSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  roles: { type: String, required: true },
  phone: { type: Number, required: true },
  reason: { type: String, required: true },
  resumeUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('InternshipApplication', internshipApplicationSchema);

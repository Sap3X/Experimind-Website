import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  companyname:{type: String , default:null },
  reason: { type: String, default:null },
  
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);

import express from 'express';
import upload from '../middleware/upload.js';
import JobApplication from '../models/JobApplication.js';
import { uploadFileToDrive } from '../utils/uploadToDrive.js';
import fs from 'fs';

const router = express.Router();

router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { jobId, jobTitle, name, email, phone, reason } = req.body;

    if (!req.file) return res.status(400).json({ error: 'Resume is required.' });

    const driveUrl = await uploadFileToDrive(req.file.path, req.file.filename);

    fs.unlinkSync(req.file.path); // clean up local file

    const newApplication = new JobApplication({
      jobId,
      jobTitle,
      name,
      email,
      phone,
      reason,
      resumeUrl: driveUrl,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Apply Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

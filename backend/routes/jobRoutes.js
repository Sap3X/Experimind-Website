import express from 'express';
import upload from '../middleware/upload.js';
import JobApplication from '../models/JobApplication.js';

const router = express.Router();

router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { jobId, jobTitle, name, address, contact, reason } = req.body;

    const resumeUrl = req.file ? `/uploads/resumes/${req.file.filename}` : null;

    if (!resumeUrl) {
      return res.status(400).json({ error: 'Resume is required.' });
    }

    const newApplication = new JobApplication({
      jobId,
      jobTitle,
      name,
      address,
      contact,
      reason,
      resumeUrl,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    console.error('Application Error:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

export default router;

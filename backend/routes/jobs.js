import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// Utility to generate the next jobId in format Job-1, Job-2, ...
async function getNextJobId() {
  const lastJob = await Job.findOne({ jobId: { $exists: true } }).sort({ jobId: -1 });

  if (!lastJob || !lastJob.jobId) return "Job-1";

  const parts = lastJob.jobId.split("-");
  const lastNumber = parseInt(parts[1]) || 0;

  return `Job-${lastNumber + 1}`;
}

// GET all jobs (latest first)
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ jobId: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a single new job
router.post("/", async (req, res) => {
  try {
    const { title, description, requirements } = req.body;

    const jobId = await getNextJobId();

    const newJob = new Job({
      jobId,
      title,
      description,
      requirements
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST multiple jobs
router.post("/add-multiple", async (req, res) => {
  try {
    const jobs = Array.isArray(req.body) ? req.body : [req.body];
    const existingJobs = await Job.find({ jobId: { $exists: true } }).sort({ jobId: -1 });
    let lastNumber = 0;

    if (existingJobs.length > 0) {
      const lastJobId = existingJobs[0].jobId;
      const parts = lastJobId?.split("-") || [];
      lastNumber = parseInt(parts[1]) || 0;
    }

    const jobsWithIds = jobs.map((job, index) => ({
      jobId: `Job-${lastNumber + index + 1}`,
      ...job,
    }));

    const savedJobs = await Job.insertMany(jobsWithIds);
    res.status(201).json(savedJobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE job by jobId
router.delete("/:jobId", async (req, res) => {
  try {
    const deleted = await Job.deleteOne({ jobId: req.params.jobId });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: `Job with ID '${req.params.jobId}' deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

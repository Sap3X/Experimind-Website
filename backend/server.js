import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import jobsRoute from "./routes/jobs.js";          // job listing routes
import jobApplyRoute from "./routes/jobRoutes.js"; // job application form submission

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure resume upload directory exists
const resumesDir = path.join(__dirname, "uploads/resumes");
fs.mkdirSync(resumesDir, { recursive: true });

// Serve static resumes for preview/download
app.use("/uploads/resumes", express.static(resumesDir));

// MongoDB connection
mongoose.connect(process.env.MONGO, {
  // Note: useNewUrlParser and useUnifiedTopology are no longer needed in Mongoose 6+
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use("/api/jobs", jobsRoute);
app.use("/api/jobs", jobApplyRoute); // handles POST /apply

// Start server
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

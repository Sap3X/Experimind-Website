import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import contactRoute from "./routes/contact.js"; // contact form submission route
import jobsRoute from "./routes/jobs.js";          // job listing routes
import jobApplyRoute from "./routes/jobRoutes.js"; // job application form submission
import internshipApplyRoute from "./routes/internships.js"; // internship form submission
import internshipPosterRoutes from "./routes/internship_posters.js"; // poster upload/display/delete

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure resume and poster upload directories exist
const resumesDir = path.join(__dirname, "uploads/resumes");
const postersDir = path.join(__dirname, "uploads/posters");

fs.mkdirSync(resumesDir, { recursive: true });
fs.mkdirSync(postersDir, { recursive: true });

// Serve static files
app.use("/uploads/resumes", express.static(resumesDir));
app.use("/uploads/posters", express.static(postersDir)); // 🔥 Serve poster images here

// MongoDB connection
mongoose.connect(process.env.MONGO).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use("/api/jobs", jobsRoute);
app.use("/api/jobs", jobApplyRoute); // handles POST /apply
app.use("/api/internships", internshipApplyRoute); // handles POST /apply
app.use("/api/contact", contactRoute); // handles POST /contact
app.use("/api", internshipPosterRoutes); // 🔥 Poster upload/retrieve/delete

// Start server
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

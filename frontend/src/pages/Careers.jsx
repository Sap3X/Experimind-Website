import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import careersImage from './assets/careerspage/careers.svg';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    reason: "",
    resume: null,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:9001/api/jobs");
        const sortedJobs = res.data.sort((a, b) => {
          const getNumber = (id) => parseInt(id.split('-')[1]);
          return getNumber(b.jobId) - getNumber(a.jobId);
        });
        setJobs(sortedJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume || formData.resume.type !== "application/pdf") {
      alert("Please upload a valid PDF resume.");
      return;
    }

    const data = new FormData();
    data.append("jobId", selectedJob.jobId);
    data.append("jobTitle", selectedJob.title);
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("contact", formData.contact);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);

    try {
      await axios.post("http://localhost:9001/api/jobs/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!");
      setShowModal(false);
      setFormData({
        name: "",
        address: "",
        contact: "",
        reason: "",
        resume: null,
      });
    } catch (err) {
      console.error("Application failed:", err);
      alert("Failed to submit. Please try again.");
    }
  };
  return (
    <div className="flex flex-col bg-white">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src={careersImage}
          alt="Careers Background"
          className="w-full h-[500px] md:h-[600px] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Why you should Choose Us?
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
            At Experimind Labs, we foster a culture of innovation, continuous learning,
            and meaningful impact through cutting-edge technology.
            Join us to work with brilliant minds on transformative projects that shape the future.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      </div>

      {/* URGENT HIRING Section */}
      <div className="py-16 md:py-24 bg-white relative">
        <h3 className="text-center text-[#2F327D] text-5xl lg:text-6xl font-bold">
          URGENT HIRING
        </h3>

        <div className="flex flex-wrap justify-center gap-6 px-2 mt-20">
          {["p15gixj3", "y27pcn3y", "08ma2ijf", "u59rj6qj"].map((id, idx) => (
            <img
              key={idx}
              src={`https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/${id}_expires_30_days.png`}
              className="w-full max-w-xs h-auto object-cover"
              alt={`card-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mb-16 px-4">
        <button
          className="bg-[#FFDD15] text-black text-lg md:text-xl lg:text-2xl py-4 px-6 rounded-lg"
          onClick={() => alert("Start Your Internship Journey")}
        >
          Start Your Internship Journey
        </button>
      </div>

      {/* Divider */}
      <div className="px-4 mb-20">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/yo1r5ok9_expires_30_days.png"
          className="w-full h-px object-cover"
          alt="divider"
        />
      </div>

      {/* Job Listings */}
      <div className="px-6 lg:px-40 mb-20">
        <h2 className="text-[#2F327D] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
          Join Our Growing Team
        </h2>

        <div className="space-y-16">
          {jobs.length > 0 ? (
            jobs.map((job, idx) => (
              <div key={idx} className="bg-[#f5f5f5] rounded-2xl p-6 md:p-10 shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-black text-2xl md:text-3xl font-bold">{job.title}</h3>
                    <p className="text-black text-lg md:text-xl">{job.description}</p>
                    <pre className="text-black whitespace-pre-wrap text-sm md:text-base">
                      Key Requirements:
                      {job.requirements
                        ?.split(/,\s*|\.\s*/)
                        .filter(req => req.trim() !== "")
                        .map((req) => `\n• ${req.trim()}`)
                        .join("")}
                    </pre>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-10">
                    <button
                      className="bg-[#FFDD15] text-black text-lg lg:text-xl py-3 px-6 rounded-lg"
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No job openings currently.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 md:p-10 rounded-xl max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="text" name="address" placeholder="Your Address" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="text" name="contact" placeholder="Contact Number" required onChange={handleChange} className="w-full border p-2 rounded" />
              <textarea name="reason" placeholder="Why do you want this opportunity?" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="file" name="resume" accept="application/pdf" required onChange={handleChange} className="w-full" />
              <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
                <button type="submit" className="bg-[#FFDD15] px-4 py-2 rounded font-semibold">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import careersImage from "../assets/Career_Hero_img.svg";
import img from "../image";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showInternshipModal, setShowInternshipModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    resume: null,
  });
  const [internFormData, setInternFormData] = useState({
    name: "",
    email: "",
    roles: "",
    phone: "",
    reason: "",
    resume: null,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:9001/api/jobs");
        const sortedJobs = res.data.sort((a, b) => {
          const getNumber = (id) => parseInt(id.split("-")[1]);
          return getNumber(b.jobId) - getNumber(a.jobId);
        });
        setJobs(sortedJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  // Fixed function to properly close job modal
  const handleCloseJobModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      resume: null,
    });
    setErrors({});
    document.body.style.overflow = "auto";
  };

  // Also fix the handleApplyInternshipClick function:
  const handleApplyInternshipClick = () => {
    setShowInternshipModal((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      if (!newState) {
        // Clear form and errors when closing
        setInternFormData({
          name: "",
          email: "",
          roles: "",
          phone: "",
          reason: "",
          resume: null,
        });
        setErrors({});
      }
      return newState;
    });
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleInternshipSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Fix: Check internFormData instead of formData
    if (!internFormData.name.trim()) newErrors.name = "Name is required";
    if (!internFormData.email.trim()) newErrors.email = "Email is required";
    if (!internFormData.phone.trim()) newErrors.phone = "Phone is required";
    if (!internFormData.roles) newErrors.roles = "Role is required";
    if (!internFormData.reason.trim()) newErrors.reason = "Reason is required";
    if (!internFormData.resume) newErrors.resume = "Resume is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    const data = new FormData();
    data.append("roles", internFormData.roles);
    data.append("name", internFormData.name);
    data.append("email", internFormData.email);
    data.append("phone", internFormData.phone);
    data.append("reason", internFormData.reason);
    data.append("resume", internFormData.resume);

    try {
      await axios.post("http://localhost:9001/api/internships/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!");
      setShowInternshipModal(false);
      setInternFormData({
        name: "",
        email: "",
        roles: "",
        phone: "",
        reason: "",
        resume: null,
      });
      setErrors({}); // Clear errors
      document.body.style.overflow = "auto"; // Reset overflow
    } catch (err) {
      console.error("Application failed:", err);
      alert("Failed to submit. Please try again.");
    }
  };

  const handleInternChange = (e) => {
    const { name, value, files } = e.target;
    setInternFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Fixed handleSubmit function with jobId and jobTitle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.reason.trim()) newErrors.reason = "Reason is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    // Check if selectedJob exists
    if (!selectedJob) {
      alert("Error: No job selected. Please try again.");
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    const data = new FormData();
    // Add job-specific data
    data.append("jobId", selectedJob.jobId);
    data.append("jobTitle", selectedJob.title);
    // Add form data
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);

    try {
      await axios.post("http://localhost:9001/api/jobs/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!");
      handleCloseJobModal(); // Use the proper close function
    } catch (err) {
      console.error("Application failed:", err);
      alert("Failed to submit. Please try again.");
    }
  };

  // Remove handleSubmit1 as it's not being used and causes confusion
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const res = await axios.get("http://localhost:9001/api/posters");
        if (res.data.success) {
          setPosters(res.data.posters);
        }
      } catch (err) {
        console.error("Error fetching posters:", err);
      }
    };

    fetchPosters();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src={careersImage}
          alt="Careers Background"
          className="w-full h-[900px] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 max-w-4xl mx-auto">
          <h1 className="Utility-font-Montserrat text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4 pt-20">
            Why you should Choose Us?
          </h1>
          <p className="Utility-font-Buenard text-[#ffffff] text-lg md:text-2xl max-w-2xl mx-auto">
            At Experimind Labs, we foster a culture of innovation, continuous
            learning, and meaningful impact through cutting-edge technology.
            Join us to work with brilliant minds on transformative projects that
            shape the future.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      </div>

      {/* URGENT HIRING Section */}
      <div className="py-16 md:py-24 bg-white relative">
        <h3 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          URGENT HIRING
        </h3>

        <div className="flex flex-wrap justify-center gap-6 px-2 mt-20">
          {posters.length > 0 ? (
            posters.map((poster, idx) => (
              <img
                key={idx}
                src={poster.url}
                className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md"
                alt={`poster-${idx}`}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg">
              No posters available at the moment.
            </p>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mb-16 px-4">
        <button
          className="bg-[#FFDD15] text-black text-lg md:text-xl lg:text-2xl py-4 px-6 rounded-lg"
          onClick={handleApplyInternshipClick}
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
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          Join Our Growing Team
        </h2>

        <div className=" space-y-16">
          {jobs.length > 0 ? (
            jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-[#f5f5f5] rounded-2xl p-6 md:p-10 shadow-md"
              >
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-1 space-y-4">
                    <h3 className="Utility-font-Montserrat text-black text-2xl md:text-3xl font-bold">
                      {job.title}
                    </h3>
                    <p className="Utility-font-NunitoSans text-black text-lg md:text-xl">
                      {job.description}
                    </p>
                    <pre className="Utility-font-NunitoSans text-black whitespace-pre-wrap text-sm md:text-base">
                      Key Requirements:
                      {job.requirements
                        ?.split(/,\s*|\.\s*/)
                        .filter((req) => req.trim() !== "")
                        .map((req) => `\n• ${req.trim()}`)
                        .join("")}
                    </pre>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-10">
                    <button
                      className="Utility-font-NunitoSans bg-[#FFDD15] text-black text-lg lg:text-xl py-3 px-6 rounded-lg"
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No job openings currently.
            </p>
          )}
        </div>
      </div>

      {/* Enhanced Internship Application Modal */}
      {showInternshipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="p-6 md:p-8">
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
                onClick={handleApplyInternshipClick}
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="Utility-font-Montserrat mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Application Form
                </h2>
                <p className="text-gray-600 text-sm">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>
              </div>

              <form
                className="Utility-font-NunitoSans"
                onSubmit={handleInternshipSubmit}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={internFormData.name}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={internFormData.email}
                      onChange={handleInternChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={internFormData.phone}
                      onChange={handleInternChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="roles"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Position
                  </label>
                  <select
                    id="roles"
                    name="roles"
                    value={internFormData.roles}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.roles ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a position</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Founder's Office">Founder's Office</option>
                    <option value="Electronics Engineer">
                      Electronics Engineer
                    </option>
                    <option value="Robotics & AI">Robotics & AI</option>
                  </select>
                  {errors.roles && (
                    <p className="text-red-500 text-sm mt-1">{errors.roles}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="reason"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Why do you want this opportunity?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us why you're interested in this position..."
                    value={internFormData.reason}
                    onChange={handleInternChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${
                      errors.reason ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.reason && (
                    <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resume"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Upload Resume
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="text-left">
                        <div className="font-medium">
                          {internFormData.resume
                            ? internFormData.resume.name
                            : "Click to upload resume"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {internFormData.resume
                            ? `PDF (${(
                                internFormData.resume.size /
                                1024 /
                                1024
                              ).toFixed(2)} MB)`
                            : "PDF only (max: 5MB)"}
                        </div>
                      </div>
                      <i className="fas fa-cloud-upload-alt text-gray-400 text-xl"></i>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      onChange={handleInternChange}
                      className="hidden"
                    />
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <i className="fas fa-file-pdf text-red-500 mr-2"></i> PDF
                      format only
                    </div>
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.resume}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-500 mb-4">
                    We respect your privacy. Your information will not be
                    shared.
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto transition-colors duration-200"
                  >
                    Apply Now <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Job Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="p-6 md:p-8">
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
                onClick={handleCloseJobModal}
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6">
                <h2 className="Utility-font-Montserrat text-2xl font-bold text-gray-800">
                  Apply for {selectedJob?.title || "Position"}
                </h2>
                <p className="text-gray-600 text-sm">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>
              </div>

              <form className="Utility-font-NunitoSans" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="reason"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Why do you want this opportunity?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us why you're interested in this position..."
                    value={formData.reason}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${
                      errors.reason ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.reason && (
                    <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resume"
                    className="block font-medium text-gray-700 mb-1 after:content-['_*'] after:text-red-500"
                  >
                    Upload Resume
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="text-left">
                        <div className="font-medium">
                          {formData.resume
                            ? formData.resume.name
                            : "Click to upload resume"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {formData.resume
                            ? `PDF (${(
                                formData.resume.size /
                                1024 /
                                1024
                              ).toFixed(2)} MB)`
                            : "PDF only (max: 5MB)"}
                        </div>
                      </div>
                      <i className="fas fa-cloud-upload-alt text-gray-400 text-xl"></i>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <i className="fas fa-file-pdf text-red-500 mr-2"></i> PDF
                      format only
                    </div>
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.resume}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-500 mb-4">
                    We respect your privacy. Your information will not be
                    shared.
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto transition-colors duration-200"
                  >
                    Apply Now <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;

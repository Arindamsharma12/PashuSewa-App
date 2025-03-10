import { useState } from "react";
import axios from "axios";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    animal_type: "",
    injury_type: "",
    location: "",
    status: "pending",
    report_url: "",
  });

  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    if (e.target.name === "image_url") {
      setImage(e.target.files[0]); // Only take first file
    } else if (e.target.name === "coverImage") {
      setCoverImage(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("email", formData.email);
    data.append("animal_type", formData.animal_type);
    data.append("injury_type", formData.injury_type);
    data.append("location", formData.location);
    data.append("status", formData.status);
    data.append("report_url", formData.report_url);
    if (image) data.append("image_url", image);
    if (coverImage) data.append("coverImage", coverImage);

    try {
      const response = await axios.post("http://localhost:8003/api/v1/animals/create-report", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
      setLoading(false);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error submitting report");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Report an Injured Animal</h2>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="animal_type"
          placeholder="Animal Type"
          value={formData.animal_type}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="injury_type"
          placeholder="Injury Type"
          value={formData.injury_type}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        
        <input
          type="text"
          name="report_url"
          placeholder="Report URL (Optional)"
          value={formData.report_url}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div>
          <label className="block font-medium">Upload Image:</label>
          <input
            type="file"
            name="image_url"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium">Upload Cover Image (Optional):</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportForm;

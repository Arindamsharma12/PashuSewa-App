import { useState } from "react";
import axios from "axios";
import logo from '../images/Pashu_Sewa_Logo.png';
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
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-2xl p-6 rounded-lg">
      <div className="flex flex-col items-center">
        <img src={logo} alt="" width={"100px"}/>
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Report an Injured Animal
        </h2>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          name="animal_type"
          placeholder="Animal Type"
          value={formData.animal_type}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          name="injury_type"
          placeholder="Injury Type"
          value={formData.injury_type}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        
        <input
          type="text"
          name="report_url"
          placeholder="Report URL (Optional)"
          value={formData.report_url}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <div>
          <label className="block font-medium">Upload Image:</label>
          <input
            type="file"
            name="image_url"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium">Upload Cover Image (Optional):</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer w-full"
        >
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportForm;

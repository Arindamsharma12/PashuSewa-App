import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import axios from 'axios';
export default function AuthPage({ type }) {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
    fullname:"",
    phone:""
  })
  let current;
  if(type == "login"){
    current = "login"
  }
  else{
    current = "register"
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = {
      email: formData.email,
      fullname:formData.fullname,
      password:formData.password,
      phone: formData.phone,
      role:"user"
    };
  
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/users/${current}`, data);
      console.log("Registration Successful", response.data);
      // Handle success (e.g., redirect or show a success message)
    } catch (error) {
      console.error("Registration Failed", error.response?.data || error.message);
      // Handle error (e.g., display an error message)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 text-center">
        <div className="flex justify-center items-center">
        <FaPaw size={50} className="text-orange-600 "/>
        </div>
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          {type === "login" ? "Login to Pashu Sewa" : "Sign Up for Pashu Sewa"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {type === "signup" && (
            <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            </>
          )}
          <button className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700">
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          {type === "login" ? "Don't have an account?" : "Already have an account?"} 
          <a href={type === "login" ? "/signup" : "/login"} className="text-orange-600 font-semibold ml-1">
            {type === "login" ? "Sign up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { FaPaw } from "react-icons/fa";
export default function AuthPage({ type }) {

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 text-center">
        <div className="flex justify-center items-center">
        <FaPaw size={50} className="text-orange-600 "/>
        </div>
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          {type === "login" ? "Login to Pashu Sewa" : "Sign Up for Pashu Sewa"}
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {type === "signup" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
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

import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-300 px-4">
      <div className="max-w-lg w-full px-10 py-12 bg-white shadow-2xl rounded-3xl text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Welcome to PopX </h2>
        <p className="text-gray-600 mb-8 text-base leading-relaxed">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, provident.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 mb-4 text-white bg-purple-700 hover:bg-purple-800 rounded-xl font-semibold transition"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 text-purple-700 bg-purple-100 hover:bg-purple-200 rounded-xl font-semibold transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

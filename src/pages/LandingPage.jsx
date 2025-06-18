import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center  min-h-screen">
  <div className="w-md max-w-sm h-screen bg-gray-100 shadow-md flex flex-col justify-end px-6 py-10">
   
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Welcome to PopX</h2>
        <p className="text-md text-gray-600 mb-8">
          Lorem ipsum dolor sit amet,  <br />consectetur adipiscing elit
        </p>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 mb-4 text-white bg-purple-500 rounded-sm font-semibold"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 text-black-700 bg-gray-400 rounded-lg font-semibold"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

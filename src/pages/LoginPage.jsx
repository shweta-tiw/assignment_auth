import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-1 text-center text-gray-900">
          Sign in to your PopX account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <label className="block text-sm font-semibold text-purple-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm font-semibold text-purple-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 rounded-full transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

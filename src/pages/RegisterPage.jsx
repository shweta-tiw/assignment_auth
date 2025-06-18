import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    localStorage.setItem("popxUser", JSON.stringify(formData));
    alert("Account created successfully!");
    navigate("/profile");
  };

  const fields = [
    { label: "Full Name", name: "fullName" },
    { label: "Phone Number", name: "phone", type: "tel" },
    { label: "Email Address", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Company Name", name: "company" },
  ];

  return (
  <div className="flex justify-center  min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-sm bg-gray-100  p-8 "
      >
        <h2
          className="text-2xl font-bold mb-2  text-gray-900
"
        >
          Create your  <br />PopX account
        </h2>

        {fields.map(({ label, name, type = "text" }) => (
          <div key={name} className="mb-4">
            <label className="block text-sm  text-purple-700 mb-1">
              {label} *
            </label>
            <input
              type={type}
              name={name}
              placeholder={`Enter ${label}`}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-sm"
              required
            />
          </div>
        ))}

       <div className="flex flex-col gap-2 mt-2 mb-3">
  <p className="text-sm font-medium text-gray-700">Are you an Agency?</p>

  <div className="flex gap-6">
    {["Yes", "No"].map((option) => (
      <label
        key={option}
        className="flex items-center text-sm font-medium text-gray-700"
      >
        <input
          type="radio"
          name="isAgency"
          value={option}
          checked={formData.isAgency === option}
          onChange={handleChange}
          className="mr-2 accent-purple-600"
        />
        {option}
      </label>
    ))}
  </div>
</div>


        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 mt-20 rounded-sm transition duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

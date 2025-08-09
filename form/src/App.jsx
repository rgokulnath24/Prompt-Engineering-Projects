import React, { useState, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!/^[A-Za-z ]{1,20}$/.test(value)) error = "Name must be letters only, max 20 chars.";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value) || value.length > 25)
          error = "Invalid email, max 25 chars.";
        break;
      case "phone":
        if (!/^\d{1,10}$/.test(value)) error = "Phone must be digits only, max 10.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => !err)) {
      setAlert({ type: "success", message: "Form submitted successfully!" });
      setFormData({ name: "", email: "", phone: "" });
    } else {
      setAlert({ type: "error", message: "Please fix the errors and try again." });
    }
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Simple Contact Form</h1>
          <p className="text-gray-500">Please fill in your details below</p>
        </header>

        {alert && (
          <div
            className={`mb-4 p-3 rounded-lg text-white ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

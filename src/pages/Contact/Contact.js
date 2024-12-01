import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.clientName.trim()) {
      errors.clientName = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccessMsg(
        `Thank you, ${formData.clientName}. Your message has been received. We will get back to you at ${formData.email} soon.`
      );
      setFormData({ clientName: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Contact Us" prevLocation={prevLocation} />
      {successMsg ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md shadow-md">
          <p className="font-semibold">{successMsg}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <h1 className="font-titleFont text-3xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                  errors.clientName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primeColor"
                }`}
              />
              {errors.clientName && (
                <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primeColor"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primeColor"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primeColor text-white py-2 rounded-md shadow-md hover:bg-black transition-all"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validateForm = () => {
    const currentErrors = {};
    if (!formData.fullName) currentErrors.fullName = "Full name is required";
    if (!formData.email) {
      currentErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z]{2,}$/i.test(formData.email)
    ) {
      currentErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      currentErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      currentErrors.password = "Password must be at least 6 characters";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMsg(
        `Welcome, ${formData.fullName}! Your account has been created successfully.`
      );
      setFormData({ fullName: "", email: "", password: "" });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="Shopfinity Logo" className="w-28" />
          </Link>
          <h1 className="font-titleFont text-2xl font-medium">
            Welcome to Shopfinity
          </h1>
          <p className="text-base text-gray-300">
            Create an account to unlock your ultimate shopping experience.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <Feature
              icon={<BsCheckCircleFill />}
              title="Fast Registration"
              description="Quick and easy setup to start shopping."
            />
            <Feature
              icon={<BsCheckCircleFill />}
              title="Exclusive Offers"
              description="Access unique discounts and personalized deals."
            />
            <Feature
              icon={<BsCheckCircleFill />}
              title="Secure Shopping"
              description="Enjoy a safe and trusted shopping experience."
            />
          </div>
          <div className="flex items-center justify-between mt-10 text-sm font-titleFont">
            <Link to="/">
              <p className="text-gray-300 hover:text-white duration-300">
                © Shopfinity
              </p>
            </Link>
            <p className="text-gray-300 hover:text-white duration-300 cursor-pointer">
              Terms
            </p>
            <p className="text-gray-300 hover:text-white duration-300 cursor-pointer">
              Privacy
            </p>
            <p className="text-gray-300 hover:text-white duration-300 cursor-pointer">
              Security
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <SuccessMessage message={successMsg} />
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center bg-white shadow-md rounded-lg">
              <h1 className="font-titleFont text-3xl font-semibold text-gray-800 mb-4">
                Create Your Account
              </h1>
              <div className="flex flex-col gap-4">
                <InputField
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  errorMessage={errors.fullName}
                  placeholder="John Doe"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  errorMessage={errors.email}
                  placeholder="you@example.com"
                />
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  errorMessage={errors.password}
                  placeholder="Enter your password"
                />
                <button
                  type="submit"
                  className="bg-primeColor text-white font-medium w-full h-10 rounded-md hover:bg-black duration-300"
                >
                  Sign Up
                </button>
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="text-blue-600 hover:underline">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Reusable Components
const InputField = ({ label, name, type, value, onChange, errorMessage, placeholder }) => (
  <div className="flex flex-col">
    <label className="font-titleFont text-base font-semibold text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-10 px-4 text-base border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
    />
    {errorMessage && (
      <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
    )}
  </div>
);

const SuccessMessage = ({ message }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-green-50">
    <p className="text-green-700 font-medium text-center mb-4">{message}</p>
    <Link to="/signin">
      <button className="bg-primeColor text-white font-medium w-48 h-10 rounded-md hover:bg-black duration-300">
        Go to Sign In
      </button>
    </Link>
  </div>
);

const Feature = ({ icon, title, description }) => (
  <div className="flex items-start gap-3">
    <span className="text-green-500 mt-1">{icon}</span>
    <p className="text-gray-300">
      <span className="text-white font-semibold">{title}</span>
      <br />
      {description}
    </p>
  </div>
);

export default SignUp;

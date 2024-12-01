import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ============= Event Handlers Start here ============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email) setErrEmail("Please enter your email");
    if (!password) setErrPassword("Please enter your password");
    if (email && password) {
      setSuccessMsg(
        `Welcome back! We're processing your credentials. You will receive further instructions at ${email}.`
      );
      setEmail("");
      setPassword("");
    }
  };
  // ============= Event Handlers End here ==============

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
            Your ultimate shopping experience starts here.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <Feature
              icon={<BsCheckCircleFill />}
              title="Fast and Easy Sign In"
              description="Seamlessly access your favorite products and services."
            />
            <Feature
              icon={<BsCheckCircleFill />}
              title="Exclusive Offers"
              description="Enjoy special discounts and personalized deals."
            />
            <Feature
              icon={<BsCheckCircleFill />}
              title="Secure Shopping"
              description="Shop with confidence and peace of mind."
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
                Sign In to Shopfinity
              </h1>
              <div className="flex flex-col gap-4">
                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  errorMessage={errEmail}
                  placeholder="you@example.com"
                />
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  errorMessage={errPassword}
                  placeholder="Enter your password"
                />
                <button
                  onClick={handleSignIn}
                  className="bg-primeColor text-white font-medium w-full h-10 rounded-md hover:bg-black duration-300"
                >
                  Sign In
                </button>
                <p className="text-sm text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="text-blue-600 hover:underline">
                      Sign Up
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

// Components
const InputField = ({ label, type, value, onChange, errorMessage, placeholder }) => (
  <div className="flex flex-col">
    <label className="font-titleFont text-base font-semibold text-gray-700">
      {label}
    </label>
    <input
      type={type}
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
    <Link to="/signup">
      <button className="bg-primeColor text-white font-medium w-48 h-10 rounded-md hover:bg-black duration-300">
        Go to Sign Up
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

export default SignIn;

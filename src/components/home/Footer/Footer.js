import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please enter your email!");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Invalid email format. Try again.");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <div className="w-full bg-[#F5F5F3] py-16">
      <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 px-4">
        <div className="col-span-2">
          <FooterListTitle title="More about Shopfinity" />
          <p className="text-sm lg:text-base text-gray-700 leading-6">
            Shopfinity is dedicated to providing innovative shopping experiences
            worldwide, blending quality with convenience.
          </p>
          <ul className="flex items-center gap-3 mt-6">
            <a
              href="https://github.com/ShaiBatonya"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-8 h-8 bg-primeColor text-gray-100 hover:text-white cursor-pointer rounded-full flex justify-center items-center hover:bg-black transition-all duration-300">
                <FaGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/shai-batonya/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-8 h-8 bg-primeColor text-gray-100 hover:text-white cursor-pointer rounded-full flex justify-center items-center hover:bg-black transition-all duration-300">
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Shop Categories" />
          <ul className="flex flex-col gap-3 text-sm lg:text-base text-gray-700">
            {["Accessories", "Clothing", "Electronics", "Home Appliances", "New Arrivals"].map(
              (category, index) => (
                <li
                  key={index}
                  className="hover:text-black hover:underline underline-offset-2 cursor-pointer transition-all duration-200"
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your Account" />
          <ul className="flex flex-col gap-3 text-sm lg:text-base text-gray-700">
            {["Profile", "Orders", "Addresses", "Account Details", "Payment Options"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-black hover:underline underline-offset-2 cursor-pointer transition-all duration-200"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="col-span-2">
          <FooterListTitle title="Subscribe to our newsletter" />
          <p className="text-sm text-gray-600 mb-4">
            Get the latest updates and exclusive offers delivered to your inbox.
          </p>
          {subscription ? (
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-green-600 font-semibold text-center"
            >
              Subscribed Successfully!
            </motion.p>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email..."
                value={emailInfo}
                onChange={(e) => setEmailInfo(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-primeColor transition-all"
              />
              <button
                onClick={handleSubscription}
                className="px-6 py-2 bg-primeColor text-white rounded-md hover:bg-black transition-all"
              >
                Subscribe
              </button>
            </div>
          )}
          {errMsg && (
            <p className="text-red-500 text-center text-sm mt-2">{errMsg}</p>
          )}
          <Image
            className="w-40 lg:w-52 mx-auto mt-6"
            imgSrc={paymentCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

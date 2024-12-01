import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logoLight } from "../../../assets/images";
import { navBarList } from "../../../constants";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth >= 667);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <header className="w-full h-20 bg-black sticky top-0 z-50 shadow-lg border-b border-gray-700">
      <nav className="h-full px-4 max-w-container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoLight}
            alt="Shopfinity Logo"
            className="w-16 h-16 rounded-full border-2 border-gray-500"
          />
          <h1 className="text-white font-titleFont text-xl md:text-2xl">
            Shopfinity
          </h1>
        </Link>

        {/* Desktop Menu */}
        {isMenuVisible && (
          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center gap-8"
          >
            {navBarList.map(({ _id, title, link }) => (
              <li key={_id}>
                <NavLink
                  to={link}
                  state={{ data: location.pathname.split("/")[1] }}
                  className="text-white hover:text-gray-400 transition duration-300 text-lg"
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}

        {/* Mobile Menu Icon */}
        <HiMenuAlt2
          onClick={toggleSidenav}
          className="text-white text-3xl cursor-pointer md:hidden"
        />

        {/* Sidenav for Mobile */}
        {isSidenavOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-2/3 bg-black p-6 shadow-lg"
            >
              {/* Logo in Sidenav */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src={logoLight}
                    alt="Shopfinity Logo"
                    className="w-12 h-12 rounded-full border-2 border-gray-500"
                  />
                  <h1 className="text-white font-titleFont text-lg">
                    Shopfinity
                  </h1>
                </div>
                <MdClose
                  onClick={toggleSidenav}
                  className="text-gray-400 hover:text-red-500 text-2xl cursor-pointer"
                />
              </div>

              {/* Sidenav Links */}
              <ul className="flex flex-col gap-6">
                {navBarList.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <NavLink
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                      className="text-white text-lg hover:text-gray-400 transition duration-300"
                      onClick={toggleSidenav}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Categories Dropdown */}
              <div className="mt-8">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="text-white flex justify-between w-full text-lg hover:text-gray-400 transition duration-300"
                >
                  Shop by Category
                  <span>{isCategoryOpen ? "-" : "+"}</span>
                </button>
                {isCategoryOpen && (
                  <motion.ul
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-4 space-y-2 text-gray-400"
                  >
                    <li className="hover:text-white">New Arrivals</li>
                    <li className="hover:text-white">Gadgets</li>
                    <li className="hover:text-white">Accessories</li>
                    <li className="hover:text-white">Electronics</li>
                    <li className="hover:text-white">Others</li>
                  </motion.ul>
                )}
              </div>

              {/* Brands Dropdown */}
              <div className="mt-6">
                <button
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                  className="text-white flex justify-between w-full text-lg hover:text-gray-400 transition duration-300"
                >
                  Shop by Brand
                  <span>{isBrandOpen ? "-" : "+"}</span>
                </button>
                {isBrandOpen && (
                  <motion.ul
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-4 space-y-2 text-gray-400"
                  >
                    <li className="hover:text-white">Brand A</li>
                    <li className="hover:text-white">Brand B</li>
                    <li className="hover:text-white">Brand C</li>
                    <li className="hover:text-white">Brand D</li>
                  </motion.ul>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

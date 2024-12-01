import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-md">
      <div className="max-w-container mx-auto px-4 py-4">
        <Flex className="flex flex-col lg:flex-row items-center justify-between">
          {/* Dropdown Menu */}
          <div
            ref={dropdownRef}
            className="relative flex items-center gap-2 cursor-pointer text-gray-800"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <HiOutlineMenuAlt4 className="w-6 h-6" />
            <p className="text-sm font-medium">Shop by Category</p>
            {showDropdown && (
              <motion.ul
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 text-gray-700 overflow-hidden z-10"
              >
                {["Accessories", "Furniture", "Electronics", "Clothes", "Bags", "Home Appliances"].map((category, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-[600px] flex items-center bg-white border rounded-md shadow-sm mt-4 lg:mt-0">
            <input
              type="text"
              className="flex-1 px-4 py-2 text-sm outline-none"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className="w-5 h-5 mx-3 text-gray-500" />
            {searchQuery && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-lg max-h-64 overflow-y-auto z-20">
                {filteredProducts.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => {
                      navigate(
                        `/product/${item.productName.toLowerCase().replace(/\s+/g, "-")}`,
                        { state: { item } }
                      );
                      setSearchQuery("");
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition duration-300 cursor-pointer"
                  >
                    <img src={item.img} alt={item.productName} className="w-10 h-10 object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{item.productName}</p>
                      <p className="text-xs text-gray-500">Price: ${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Menu & Cart */}
          <div className="flex items-center gap-6 mt-4 lg:mt-0">
            {/* User Menu */}
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <FaUser className="w-5 h-5 text-gray-700" />
              <FaCaretDown className="w-4 h-4 text-gray-500" />
              {showUserMenu && (
                <motion.ul
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 right-0 bg-white shadow-lg rounded-md w-40 text-gray-700 z-10"
                >
                  {["Login", "Sign Up", "Profile", "Settings"].map((option, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer"
                    >
                      <Link to={option === "Login" ? "/signin" : "/signup"}>
                        {option}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Shopping Cart */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="w-5 h-5 text-gray-700" />
              {products.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {products.length}
                </span>
              )}
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;

import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { motion } from "framer-motion";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/product/${props.productName.toLowerCase().replace(/\s/g, "-")}`, {
      state: { item: props },
    });
  };

  return (
    <motion.div
      className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 ease-in-out"
      whileHover={{ scale: 1.02 }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          imgSrc={props.img}
          alt={props.productName}
        />
        {props.badge && (
          <div className="absolute top-4 left-4">
            <Badge text={props.badge} />
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 truncate">
          {props.productName}
        </h2>
        <p className="text-sm text-gray-600">{props.color}</p>
        <p className="text-lg font-semibold text-purple-700 mt-2">
          ${props.price}
        </p>
      </div>

      {/* Hover Actions */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-gray-50 shadow-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ul className="flex flex-col items-center gap-2 p-4 text-sm font-medium text-gray-600">
          <li
            onClick={() =>
              dispatch(
                addToCart({
                  _id: props._id,
                  name: props.productName,
                  quantity: 1,
                  image: props.img,
                  badge: props.badge,
                  price: props.price,
                  colors: props.color,
                })
              )
            }
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600"
          >
            Add to Cart <FaShoppingCart />
          </li>
          <li
            onClick={handleProductDetails}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600"
          >
            View Details <MdOutlineLabelImportant />
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
            Add to Wish List <BsSuitHeartFill />
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
            Compare <GiReturnArrow />
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Product;

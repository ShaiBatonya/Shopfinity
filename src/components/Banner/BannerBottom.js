import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  const features = [
    {
      id: 1,
      icon: <span className="font-bold text-lg">2</span>,
      title: "Two Years Warranty",
      description: "Peace of mind with our long-lasting warranty.",
    },
    {
      id: 2,
      icon: <MdLocalShipping className="text-xl" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $50.",
    },
    {
      id: 3,
      icon: <CgRedo className="text-xl" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days of purchase.",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-container mx-auto flex flex-wrap justify-around gap-6">
        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="flex items-center gap-4 p-4 bg-gray-100 shadow-sm rounded-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primeColor text-white rounded-full">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;

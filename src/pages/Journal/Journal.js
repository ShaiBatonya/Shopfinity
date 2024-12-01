import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state?.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      {/* כותרת פירורי לחם */}
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-4">
          <span className="text-primeColor font-semibold text-lg">Shopfinity</span>{" "}
          is your trusted source for staying updated on the latest trends,
          innovations, and shopping tips. Our journals are curated to inspire,
          inform, and elevate your shopping experience.
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Explore our handpicked articles and insights, designed to make your
          journey with us even more exciting and fulfilling.
        </p>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Browse Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;

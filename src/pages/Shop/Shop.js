import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const handleItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs title="Products" />

      {/* Products Section */}
      <div className="flex flex-col mdl:flex-row gap-10 pb-20">
        {/* Sidebar Navigation */}
        <div className="w-full mdl:w-[25%] hidden mdl:block">
          <ShopSideNav />
        </div>

        {/* Products and Pagination */}
        <div className="w-full mdl:w-[75%] flex flex-col gap-8">
          <ProductBanner itemsPerPageFromBanner={handleItemsPerPage} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

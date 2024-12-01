import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <main className="w-full mx-auto bg-gray-50">
      {/* Banner Section */}
      <section className="relative bg-white">
        <Banner />
        <BannerBottom />
      </section>

      {/* Lazy Loading Sections */}
      <div className="max-w-container mx-auto px-4 space-y-12">
        <Suspense fallback={<div className="text-center py-8">Loading Sale Section...</div>}>
          <Sale />
        </Suspense>
        <Suspense fallback={<div className="text-center py-8">Loading New Arrivals...</div>}>
          <NewArrivals />
        </Suspense>
        <Suspense fallback={<div className="text-center py-8">Loading Best Sellers...</div>}>
          <BestSellers />
        </Suspense>
        <Suspense fallback={<div className="text-center py-8">Loading Year Product...</div>}>
          <YearProduct />
        </Suspense>
        <Suspense fallback={<div className="text-center py-8">Loading Special Offers...</div>}>
          <SpecialOffers />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;

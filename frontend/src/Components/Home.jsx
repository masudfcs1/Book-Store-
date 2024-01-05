import React from "react";
import Banner from "./Banner";
import BestSellerBook from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBook from "./OtherBook";
import CustomerReview from "./CustomerReview";

const Home = () => {
  return (
    <div>
      {/* <div className=" h-screen">Home Page</div>
      <div className=" h-screen bg-green-500"></div> */}
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
      <OtherBook />
      <CustomerReview />
    </div>
  );
};

export default Home;

import React from "react";
import BannerCard from "./BannerCard/BannerCard";

const Banner = () => {
  return (
    <div className=" px-4 lg:px-28 bg-teal-200 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left side */}
        <div className=" md:w-1/2 md:space-y-8 h-full">
          <h2 className=" text-6xl font-bold leading-snug text-black">
            Buy and Sell Your Books
          </h2>{" "}
          <p className=" md:w-4/5">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            dignissimos deserunt iste tenetur accusantium repellat sed ea
            distinctio ipsa aliquam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestias, minus.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder=" Search a book"
              className=" py-2 px-2 rounded-ss-sm outline-none"
            />
            <button className=" bg-green-500 px-6 py-2 text-white font-medium hover:bg-blend-overlay transition-all ease-in duration-200 hover:bg-green-600">
              Search
            </button>
          </div>
        </div>
        {/* Right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;

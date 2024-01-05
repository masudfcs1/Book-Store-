import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className=" lg:px-28 px-4 my-20 flex flex-col md:flex-row justify-between items-center gap-12 ">
      <div className=" md:w-1/2">
        <img src={FavBookImg} alt="Image" className=" rounded md:w-10/12" />
      </div>
      <div className=" md:w-1/2 space-y-6">
        <h2 className=" text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Discover Your Favorite <span className=" text-green-500">Books</span>
        </h2>
        <p className=" mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          labore nihil quisquam quidem? Minus itaque dolores inventore
          accusantium praesentium nemo fuga sit tempora ipsam numquam!
        </p>

        <div className=" flex flex-col sm:flex-row gap-8 justify-between md:w-3/4 my-14">
          <div>
            <h2 className=" text-3xl font-bold">900+</h2>
            <p className=" text-base">Book Listing</p>
          </div>
          <div>
            <h2 className=" text-3xl font-bold">750+</h2>
            <p className=" text-base">Register Users </p>
          </div>
          <div>
            <h2 className=" text-3xl font-bold">450+</h2>
            <p className=" text-base">Runing User </p>
          </div>
          <div>
            <h2 className=" text-3xl font-bold">1300+</h2>
            <p className=" text-base">PDF Downloads </p>
          </div>
        </div>

        <Link to="/shop" className=" mt-12 block">
          <button className=" bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;

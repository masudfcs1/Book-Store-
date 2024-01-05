import { BsCart3 } from "react-icons/bs";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const BookCard = ({ books, headingine }) => {
  return (
    <div className=" my-16 px-4 lg:px-24">
      <h2 className=" text-5xl text-center font-bold text-black my-5">
        {headingine}
      </h2>
      {/* Card */}
      <div className=" mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className=" relative">
                  <img src={book.imageURL} alt="image" />
                  <div className=" absolute top-2 right-2 bg-green-500 hover:bg-teal-400 p-2 rounded">
                    <BsCart3 />
                  </div>
                </div>
                <div>
                  <h3>{book.bookTitle} </h3>
                  <p>{book.authName} </p>
                </div>
                <div>
                  <p>$9.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;

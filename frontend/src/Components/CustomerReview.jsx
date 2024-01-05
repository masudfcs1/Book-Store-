import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "flowbite-react";
import profileImg from "../assets/profile.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const CustomerReview = () => {
  return (
    <div className=" my12 lg:px-28 px-4">
      <h2 className=" text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10 "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Nico Maiken</h3>
                <p className=" text-base">Product Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10  "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Piso Nobel</h3>
                <p className=" text-base">Executive Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <AiOutlineStar />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10  "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Abey Heltoryte</h3>
                <p className=" text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10  "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Jon Diko</h3>
                <p className=" text-base">Product Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10 "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Nico Maiken</h3>
                <p className=" text-base">Product Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <AiOutlineStar />
              </div>
              <div className=" mt-6">
                <p className=" mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere repellendus rerum laudantium, deserunt voluptatum
                </p>
                <Avatar
                  alt="avatar of Jese"
                  className=" w-10  "
                  img={profileImg}
                  rounded
                />
                <h3 className=" text-lg font-medium">Helto Toato</h3>
                <p className=" text-base">Product Manager</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;

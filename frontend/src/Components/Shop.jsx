import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 15)));
  }, []);

  return (
    <div className=" mt-28 px-4 lg:px-24">
      <h2>All Books are hare</h2>
      <div className=" grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={book.imageURL}
            key={book._id}
          >
            <a href="#">
              <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle} </p>
              </h5>
            </a>
            <div className="mb-5 text-amber-500 mt-2.5 flex items-center">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />

              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                <p>4.5</p>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $9.00
              </span>
              <a
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                href="#"
              >
                <p>Add to cart</p>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

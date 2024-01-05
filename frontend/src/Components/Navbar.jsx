import { GiCrossMark } from "react-icons/gi";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  const togglehandler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //NavItem here

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" }
  ];

  return (
    <header className=" w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? " sticky top-0 left-0 right-0 bg-green-500" : ""
        }`}
      >
        <div className=" flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className=" text-2xl font-bold text-green-700 flex items-center gap-2"
          >
            <FaBlog className=" inline-block" /> Book
          </Link>

          <ul className=" md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className=" block text-base text-black uppercase cursor-pointer hover:text-green-500"
              >
                {link}{" "}
              </Link>
            ))}
          </ul>

          {/* Lg Devices */}
          <div className=" space-x-12 lg:flex hidden items-center">
            <button>
              <CgMenuRightAlt className=" w-5 hover:text-green-500" />
            </button>
          </div>

          {/* Manu for the Mobile Devices */}
          <div className=" md:hidden flex ">
            <button
              onClick={togglehandler}
              className=" text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <GiCrossMark className=" w-6 h-6 text-black" />
              ) : (
                <CgMenuRightAlt className=" w-6 h-6 text-black" />
              )}{" "}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 bg-teal-300 px-4 mt-16 py-7 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className=" block text-base text-black text-center uppercase cursor-pointer hover:text-green-500"
            >
              {link}{" "}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

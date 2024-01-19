import React from "react";
import { Link } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Products",
    path: "/products",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="body-font shadow-lg bg-[#3559E0]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font cursor-pointer font-medium items-center text-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-[#0F2167] rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div className="grid">
            <span className="ml-3 text-3xl text-[white]">YS</span>
            <i className="text-sm text-white">your perfect store...</i>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
          {navigations.map((item) => {
            return (
              <Link to={item.path} className="mr-5 hover:text-white xl:text-1xl text-xl">
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Link to={"/cart"}>
          <button className="inline-flex items-center text-white bg-[#0F2167] border-0 py-2 px-4 focus:outline-none rounded-full text-base mt-4 md:mt-0">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

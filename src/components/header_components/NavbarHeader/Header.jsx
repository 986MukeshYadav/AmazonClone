import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import LanguageSection from "./LanguageSection";
import AccountList from "./AccountList";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [showAll, setShowAll] = useState(false);
  const [showLanguageCard, setShowLanguageCard] = useState(false);
  const [showAccountCard, setShowAccountCard] = useState(false);
  const items = [
    {
      id: "1",
      title: "Home & Garden",
    },
    {
      id: "2",
      title: "Electronics",
    },
    {
      id: "3",
      title: "Clothing & Fashion",
    },
    {
      id: "4",
      title: "Home & Garden",
    },
    {
      id: "5",
      title: "Electronics",
    },
    {
      id: "6",
      title: "Clothing & Fashion",
    },
    {
      id: "7",
      title: "Home & Garden",
    },
    {
      id: "8",
      title: "Electronics",
    },
    {
      id: "9",
      title: "Clothing & Fashion",
    },
    {
      id: "10",
      title: "Home & Garden",
    },
  ];

  return (
    //  Logo Starts Here

    <nav className="bg-gray-800 h-16 flex items-center p-4 lg:p-6 sm:p-3 sm:bg-slate-800 md:bg-slate-900  lg:bg-slate-900">
      <div className="md:hidden flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans my-2 text-white">
        <IoMdMenu className="text-5xl gap-1 -ml-2 mr-2" />
      </div>

      <div className="flex items-center shrink-0 ">
        <a
          href="#"
          className="flex items-center hover:border-white hover:border-2 hover:rounded"
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="h-10 p-1 mt-1 sm:h-12 md:h-14 lg:h-10 xl:h-10 2xl:h-10"
          />
          <span className="text-white">.in</span>
        </a>
      </div>

      {/* Logo Ends Here */}

      {/* Location Starts Here */}
      <div className=" items-center space-x-2 ml-2  hover:border-white hover:border-2 hover:rounded cursor-pointer hidden lg:block shrink-0 ">
        <div className="flex items-center text-white  my-1 ">
          <IoLocationOutline className="text-2xl text-gray-100" />
          <div>
            <div className="text-xs text-gray-300">
              Delivering to Ahmedabad 380004
            </div>
            <div className="text-sm font-bold ">Update location</div>
          </div>
        </div>
      </div>
      {/* Location Ends Here */}

      {/* Searchbar Starts Here */}

      <div className=" h-10 rounded-md flex flex-grow relative ml-2 md:flex ">
        <span
          onClick={() => setShowAll(!showAll)}
          className="w-14 h-full bg-[#dee2e6] hover:bg-[#dfdee6] border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont  items-center justify-center rounded-tl-md rounded-bl-md hidden lg:flex sm:flex "
        >
          All<span></span>
          <IoMdArrowDropdown />
        </span>

        {showAll && (
          <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-[#1399FF] text-[#000000] p-2 flex-col gap-1 z-50">
            {items.map((item) => (
              <li
                key={item.id}
                className="text-xs -ml-1.5 my-2 tracking-wide font-Sans font-semibold border-b-transparent cursor-pointer duration-200 hover:bg-blue-600 hover:text-white "
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}

        <input
          className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 hidden sm:block "
          type="text"
          placeholder="Search Amazon.in"
        />
        <span className="w-12 h-full lg:flex items-center justify-center bg-[#FF9900] hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md  sm:block hidden">
          <AiOutlineSearch className="text-2xl" />
        </span>
      </div>

      {/* Searchbar Ends Here */}

      {/* language  Starts Here */}
      <div
        className="lg:flex items-center ml-5 hover:border-white hover:border-2 hover:rounded cursor-pointer relative hidden"
        onMouseEnter={() => setShowLanguageCard(true)}
        onMouseLeave={() => setShowLanguageCard(false)}
      >
        <img src="./india.png" alt="Logo" className="h-7 p-1 mt-1 " />
        <span className="text-white font-bold">EN</span>
        <IoMdArrowDropdown className="text-lg mt-3 text-white" />

        {/* Language Card */}
        {showLanguageCard && (
          <div className="absolute top-10 left-0 w-64 rounded bg-white border border-gray-300 p-4 z-50">
            <LanguageSection />
          </div>
        )}
      </div>

      {/* language  Ends Here */}

      {/* SignIn Starts Here */}

      <div
        className=" flex-col items-start justify-center hover:border-white hover:border-2 hover:rounded cursor-pointer ml-4 relative hidden lg:block shrink-0"
        onMouseEnter={() => setShowAccountCard(true)}
        onMouseLeave={() => setShowAccountCard(false)}
      >
        <p className="text-xs text-white font-light">Hello, sign in</p>
        <p className="font-bold -mt-1 text-white">
          Accounts & Lists
          <span className="inline-block">
            <IoMdArrowDropdown />
          </span>
        </p>

        {showAccountCard && (
          <div className="absolute top-10 -left-full w-96  rounded bg-white border border-gray-300 p-4 z-50">
            <AccountList />
          </div>
        )}
      </div>

      {/* SignIn Ends Here */}

      {/* Returns and Orders */}
      <div className=" flex-col items-start justify-center hover:border-white hover:border-2 hover:rounded cursor-pointer ml-4 hidden lg:block shrink-0">
        <p className="text-white text-xs">Returns</p>
        <p className="text-white font-bold">& Orders</p>
      </div>
      {/* Returns and Orders Ends Here */}

      <div className="block lg:hidden items-center space-x-2 cursor-pointer text-gray-300 lg:px-6">
        <div className="flex flex-col items-start">
          <p className="font-bold text-xs flex items-center">
            Sign in
            <IoMdArrowDropdown className="ml-1" />
            <FaUserCircle className="text-2xl" />
          </p>
        </div>
      </div>

      {/* Cart Starts Here */}

      <div className="flex items-start justify-center hover:border-white hover:border-2 hover:rounded cursor-pointer ml-4 relative">
        {/* Cart Icon */}
        <LuShoppingCart className="text-white text-4xl" />

        <p className="text-sm font-bold text-white mt-4 hidden md:block">
          Cart
          <span className="absolute text-lg -top-5 left-3 font-semibold p-1 h-4 text-[#FFB300]">
            0
          </span>
        </p>

        <span className="absolute text-lg -top-5 left-3 font-semibold p-1 h-4 text-[#FFB300] md:hidden">
          0
        </span>
      </div>
    </nav>
  );
}

export default Header;

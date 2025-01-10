import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import SideNav from "./SideNav";
import { IoLocationOutline } from "react-icons/io5";

function HeaderBottom() {
  const [sidebar, setSideBar] = useState(false);

  return (
    <>
      <div className="w-full bg-slate-800 px-4 sm:h-[36px] text-white flex items-center font-sans  ">
        {/* list-items starts here */}
        <ul className="flex items-center gap-3 text-sm tracking-wide font-semibold shrink-0">
          <li
            onClick={() => setSideBar(true)}
            className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer"
          >
            <IoMdMenu className="text-2xl gap-1" />
            All
          </li>

          {/*for medium and small screens */}
          <li className="md:hidden flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans my-2">
            Shop By <br />
            Category
          </li>
          <li className=" items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans ml-2">
            Deals
          </li>
          <li className=" items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans ml-2">
            Sell
          </li>

          {/*for larger screens */}
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Prime
            <span className="text-gray-400 inline-block text-sm">
              <IoMdArrowDropdown />
            </span>
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Customer Service
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Electronics
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Home & Kitchen
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Amazon Pay
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            New Releases
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Fashion
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Computers
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Car & Motorbike
          </li>
          <li className="hidden md:flex items-center gap-1 hover:border-white hover:border hover:rounded-sm cursor-pointer font-sans">
            Books
          </li>
        </ul>

        {sidebar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-stone-800 bg-opacity-50">
            <div className="w-full h-full relative">
              <div className="w-[350px] h-full bg-white broder border-black">
                <div className="w-full  bg-slate-800 text-white py-2 px-6 flex item-center gap-2">
                  <CgProfile className="text-3xl" />
                  <h3 className="text-lg font-bold tracking-wide">
                    Hello, sign in
                  </h3>
                </div>

                <div className="h-full overflow-y-auto pb-12 ">
                  <SideNav
                    title="Trending"
                    one="Best Sellers"
                    two="New Releases"
                    three="Movers and Shakers"
                  />
                  <SideNav
                    title="Digital Content and Devices"
                    one="Amazon miniTV- FREE entertainment"
                    two="Echo & Alexa "
                    three="Fire TV"
                  />
                  <SideNav
                    title="Shop by Category"
                    one="Mobiles, Computers"
                    two="TV, Appliances, Electronics"
                    three="Men's Fashion"
                  />
                  <SideNav
                    title="Programs & Features"
                    one="Amazon Pay"
                    two="Gift Cards & Mobile Recharges"
                    three="Amazon Launchpad"
                  />
                  <SideNav
                    title="Help & Settings"
                    one="Your Account"
                    two="Customer Service"
                    three="Sign in"
                  />
                </div>
                <span
                  onClick={() => setSideBar(false)}
                  className="cursor-pointer absolute top-0 left-[360px] mt-3 w-10 h-10 text-white font-semibold flex items-center
                     justify-center rounded border-2  hover:text-white duration-300 text-2xl "
                >
                  <RxCross1 />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" flex items-center space-x-2 hover:border-white hover:border-2 hover:rounded cursor-pointer bg-slate-600 -mt-1 sm:hidden ">
        <div className="flex items-center text-white  my-1 ">
          <IoLocationOutline className="text-2xl text-white ml-2 font-semibold" />
          <div>
            <div className="text-sm text-white">
              Delivering to Ahmedabad 380004 - Update location
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;

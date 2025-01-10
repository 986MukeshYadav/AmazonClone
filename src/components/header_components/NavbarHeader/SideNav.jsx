import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function SideNav({ title, one, two, three }) {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-neutral-900 text-lg mb-1 px-6 py-2 font-bold">
        {title}
      </h3>
      <ul className="text-sm font-sans font-semibold">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}
          {(title === "Digital Content and Devices" ||
            title === "Shop by Category") && (
            <IoIosArrowForward className="text-lg font-semibold" />
          )}
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}
          {(title === "Digital Content and Devices" ||
            title === "Shop by Category") && (
            <IoIosArrowForward className="text-lg font-semibold" />
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

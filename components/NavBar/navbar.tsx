import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="bg-black h-auto  mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              <img
                className="w-96 p-2 hidden md:block"
                src="/spacex-logo.png"
                alt=""
              />
            </Link>
            <Link href="/">
              <img
                className="block md:hidden w-32 p-2"
                src="/mini-spacex-logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className=" font-semibold text-white my-auto text-xl md:text-2xl pr-5 cursor-pointer">
            <Link href="/">
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

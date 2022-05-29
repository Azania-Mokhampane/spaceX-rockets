import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="bg-black h-auto  mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer">
            <div className="p-2 hidden md:block">
              <Link href="/">
                <Image
                  src="/img/spacex-logo.png"
                  alt="spacex-logo"
                  width={226}
                  height={40}
                />
              </Link>
            </div>
            <div className="block md:hidden w-32 p-2">
              {" "}
              <Link href="/">
                <Image
                  src="/img/mini-spacex-logo.png"
                  alt="spacex-logo"
                  width={180}
                  height={70}
                />
              </Link>
            </div>
          </div>
          <div className=" font-semibold text-white my-auto text-xl md:text-2xl pr-5 cursor-pointer ">
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

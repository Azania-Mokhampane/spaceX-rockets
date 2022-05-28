import React from "react";
import Link from "next/link";
import NavBar from "../NavBar/navbar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-10">
        <div className="mx-auto md:w-3/5 rounded-lg shadow-2xl w-11/12 bg-gray-300 py-4">
          <div className=" pb-2 text-center font-bold">
            <h1>SpaceX Rocket Launches Dates</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center ">
            <div className="w-56">
              <img
                className="block md:hidden"
                src="/icons/Rocket_Boy.svg"
                alt="A boy on a rocket"
              />
              <img
                className="hidden md:block"
                src="/icons/Rocket_Launch.svg"
                alt="A Rocket in space"
              />
            </div>
            <div className="grid grid-cols-1 items-center  gap-5 font-semibold md:flex-row">
              <div className="bg-gray-200 p-5 text-center rounded-md ">
                <h1>Last Rocket Launch</h1>
                <Link href="/last-launch">
                  <p>Launch Date</p>
                </Link>
              </div>
              <div className="bg-gray-200 p-5 text-center rounded-md ">
                <h1>Next Rocket Launch</h1>
                <Link href="/next-launch">
                  <p>Launch Date</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import React from "react";
import Link from "next/link";
import NavBar from "../NavBar/navbar";
import LaunchDate from "../UI/launchDate";

const LandingPage = () => {
  //dummy data before we get the actual data
  const LaunchesData = {
    latestLaunch: {
      id: "01",
      date: new Date("2020-10-24T11:31:00-04:00"),
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    nextLaunch: {
      id: "12",
      date: new Date("2020-12-06T11:17:00-05:00"),
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  };

  return (
    <>
      <NavBar />
      <div className="pt-10">
        <div className="mx-auto md:w-4/5 lg:w-3/5 rounded-lg shadow-2xl w-11/12 bg-gray-300 py-4">
          <div className=" pb-2 text-center font-bold md:text-3xl md:pb-5">
            <h1>SpaceX Rocket Launches Dates</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center ">
            <div className="w-56 md:w-96">
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
            <div className="grid grid-cols-1 gap-5 p-5 md:w-80 font-semibold md:flex-row">
              <div className="bg-gray-200 p-5 text-center rounded-md ">
                <h1>Last Rocket Launch</h1>
                <Link href="/last-launch">
                  <div>
                    {<LaunchDate date={LaunchesData.latestLaunch.date} />}
                  </div>
                </Link>
              </div>
              <div className="bg-gray-200 p-5 text-center rounded-md ">
                <h1>Next Rocket Launch</h1>
                <Link href="/next-launch">
                  <div>
                    {<LaunchDate date={LaunchesData.nextLaunch.date} />}
                  </div>
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

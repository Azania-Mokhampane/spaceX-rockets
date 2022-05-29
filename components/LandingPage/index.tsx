import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from "../NavBar/navbar";
import LaunchDate from "../UI/launchDate";
import { useQuery } from "@apollo/client";
import Card from "../UI/card";
import { SPACEX_LAUNCH_DATES } from "../../graphql/queries";
import Loader from "../UI/loader";

interface ILAUNCHDATE {
  launchLatest: {
    launch_date_local?: string;
  };
  launchNext: {
    launch_date_local?: string;
  };
}

const LandingPage = () => {
  const [LaunchesData, setLaunchesData] = useState<
    ILAUNCHDATE | null | undefined
  >();

  const { data, loading, error } = useQuery(SPACEX_LAUNCH_DATES);

  useEffect(() => {
    if (data) {
      setLaunchesData(data);
    }
  }, [data]);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <NavBar />
      <Card>
        <div className="text-lg pb-2 text-center font-bold md:text-3xl md:pb-5">
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
              <Link href="/last-launch">
                <h1 className="text-lg cursor-pointer">Last Rocket Launch</h1>
              </Link>
              <LaunchDate
                date={
                  LaunchesData && LaunchesData.launchLatest.launch_date_local
                }
              />
            </div>
            <div className="bg-gray-200 p-5 text-center rounded-md ">
              <Link href="/next-launch">
                <h1 className="text-lg cursor-pointer">Next Rocket Launch</h1>
              </Link>
              <LaunchDate
                date={LaunchesData && LaunchesData.launchNext.launch_date_local}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default LandingPage;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from "../NavBar/navbar";
import LaunchDate from "../UI/launchDate";
import { useQuery } from "@apollo/client";
import Card from "../UI/card";
import { SPACEX_LAUNCHES } from "../../graphql/queries";
import Loader from "../UI/loader";
import Image from "next/image";
import { IROCKETS } from "../../types/index";

const LandingPage = () => {
  const [LaunchesData, setLaunchesData] = useState<
    IROCKETS | null | undefined
  >();

  const { data, loading, error } = useQuery(SPACEX_LAUNCHES);

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
            <div className="block md:hidden">
              <Image
                width={400}
                height={300}
                src="/icons/Rocket_Boy.svg"
                alt="A boy on a rocket"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/icons/Rocket_Launch.svg"
                width={400}
                height={300}
                alt="A Rocket in space"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 p-5 md:w-80 font-semibold md:flex-row">
            <Link href="/last-launch">
              <div className="bg-gray-200 p-5 text-center rounded-md cursor-pointer">
                <h1 className="text-lg ">Last Rocket Launch</h1>

                <LaunchDate
                  date={
                    LaunchesData && LaunchesData.launchLatest.launch_date_local
                  }
                />
              </div>
            </Link>
            <Link href="/next-launch">
              <div className="bg-gray-200 p-5 text-center rounded-md cursor-pointer">
                <h1 className="text-lg ">Next Rocket Launch</h1>

                <LaunchDate
                  date={
                    LaunchesData && LaunchesData.launchNext.launch_date_local
                  }
                />
              </div>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default LandingPage;

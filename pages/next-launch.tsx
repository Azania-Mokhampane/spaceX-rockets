import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SPACEX_LAUNCHES } from "../graphql/queries";
import NavBar from "../components/NavBar/navbar";
import Card from "../components/UI/card";
import Button from "../components/UI/button";
import Loader from "../components/UI/loader";
import Image from "next/image";
import { IROCKETS } from "../types/index";

const NextLaunch = () => {
  const [launchDetails, setLaunchDetails] = useState<
    IROCKETS | null | undefined
  >();

  const { loading, data, error } = useQuery(SPACEX_LAUNCHES);

  useEffect(() => {
    if (data) {
      setLaunchDetails(data);
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
        <div className="font-bold text-center md:text-2xl">
          <h1>Next Rocket Launch</h1>
        </div>
        {launchDetails && (launchDetails.launchNext.details == null) == null ? (
          <div className="flex flex-col items-center">
            <div className="w-56 md:w-80">
              <Image
                src="/icons/No_data.svg"
                layout="responsive"
                width={300}
                height={300}
                alt="not found"
              />
            </div>
            <p className="md:text-lg">No details found :(</p>
          </div>
        ) : (
          <div className="p-2 ">
            <p>{launchDetails && launchDetails.launchNext.details}</p>
          </div>
        )}
      </Card>
      <Button />
    </>
  );
};

export default NextLaunch;

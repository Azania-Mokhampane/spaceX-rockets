import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SPACEX_LATEST_LAUNCH } from "../graphql/queries";
import NavBar from "../components/NavBar/navbar";
import Card from "../components/UI/card";
import Button from "../components/UI/button";
import Loader from "../components/UI/loader";

interface ILASTLAUNCH {
  launchLatest: {
    details?: string;
  };
}

const LastLaunch = () => {
  const [launchDetails, setLaunchDetails] = useState<
    ILASTLAUNCH | null | undefined
  >();

  const { loading, data, error } = useQuery(SPACEX_LATEST_LAUNCH);

  useEffect(() => {
    if (data) {
      setLaunchDetails(data);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <NavBar />
      <Card>
        <div className="font-bold text-center">
          <h1>Last Rocket Launch</h1>
        </div>
        {launchDetails && launchDetails.launchLatest.details == null ? (
          <div className="flex flex-col items-center">
            <img className="w-56" src="/icons/No_data.svg" alt="not found " />
            <p>No details found :(</p>
          </div>
        ) : (
          <p>{launchDetails && launchDetails.launchLatest.details}</p>
        )}
      </Card>
      <Button />
    </>
  );
};

export default LastLaunch;

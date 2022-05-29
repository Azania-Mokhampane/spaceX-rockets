import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SPACEX_NEXT_LAUNCH } from "../graphql/queries";
import NavBar from "../components/NavBar/navbar";
import Card from "../components/UI/card";
import Button from "../components/UI/button";
import Loader from "../components/UI/loader";

interface INEXTLAUNCH {
  launchNext: {
    details?: string;
  };
}

const NextLaunch = () => {
  const [launchDetails, setLaunchDetails] = useState<
    INEXTLAUNCH | null | undefined
  >();

  const { loading, data, error } = useQuery(SPACEX_NEXT_LAUNCH);

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
        <div className="font-bold text-center">
          <h1>Next Rocket Launch</h1>
        </div>
        {launchDetails && (launchDetails.launchNext.details == null) == null ? (
          <div className="">
            <p>No details found :(</p>
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

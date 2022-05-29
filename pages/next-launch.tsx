import React, { useState } from "react";
import { gql } from "@apollo/client";
import NavBar from "../components/NavBar/navbar";
import { client } from "./_app";
import Card from "../components/UI/card";

const NextLaunch = () => {
  const [launchDetails, setLaunchDetails] = useState<any>({});

  client
    .query({
      query: gql`
        query {
          launchNext {
            details
          }
        }
      `,
    })
    .then((result) => setLaunchDetails(result.data.launchNext));
  // console.log(launchDetails.details);
  return (
    <>
      <NavBar />
      <Card>
        <div className="font-bold text-center">
          <h1>Next Rocket Launch</h1>
        </div>
        {launchDetails.details == null ? (
          <div className="">
            <p>No details found :(</p>
          </div>
        ) : (
          <div className="p-2 ">
            <p>{launchDetails.details}</p>
          </div>
        )}
      </Card>
    </>
  );
};

export default NextLaunch;

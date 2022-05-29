import React, { useState } from "react";
import { gql } from "@apollo/client";
import { client } from "./_app";

import NavBar from "../components/NavBar/navbar";
import Card from "../components/UI/card";

const LastLaunch = () => {
  const [launchDetails, setLaunchDetails] = useState<any>({});

  client
    .query({
      query: gql`
        query {
          launchLatest {
            details
          }
        }
      `,
    })
    .then((result) => setLaunchDetails(result.data.launchLatest));

  return (
    <>
      <NavBar />
      <Card>
        <div className="font-bold text-center">
          <h1>Last Rocket Launch</h1>
        </div>
        {launchDetails.details === null ? (
          <div className="flex flex-col items-center">
            <img className="w-56" src="/icons/No_data.svg" alt="not found " />
            <p>No details found :(</p>
          </div>
        ) : (
          <p>{launchDetails.details}</p>
        )}
      </Card>
    </>
  );
};

export default LastLaunch;

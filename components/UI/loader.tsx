import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NavBar from "../NavBar/navbar";

export default function Loader() {
  return (
    <>
      <NavBar />
      <div
        style={{
          // do your styles depending on your needs.
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh ",
        }}
      >
        <Box mx={"auto"} sx={{}}>
          <CircularProgress />
        </Box>
      </div>
    </>
  );
}

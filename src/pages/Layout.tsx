import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Box padding={5}>
          <Outlet />
        </Box>
      </React.StrictMode>
    </>
  );
};

export default Layout;

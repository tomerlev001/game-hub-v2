import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Outlet />
      </React.StrictMode>
    </>
  );
};

export default Layout;

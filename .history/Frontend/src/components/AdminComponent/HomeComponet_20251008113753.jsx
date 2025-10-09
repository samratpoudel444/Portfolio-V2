import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div className="flex">
      <div className=" sm:flex sm:flex-row hidden fixed">
        <SideBar />
      </div>
      <div className="ml-84 m-16  w-full h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

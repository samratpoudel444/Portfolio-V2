import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div className="flex">
      <div className=" sm:flex sm:flex-row hidden fixed">
        <SideBar />
      </div>
      <div className="m-16 border w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

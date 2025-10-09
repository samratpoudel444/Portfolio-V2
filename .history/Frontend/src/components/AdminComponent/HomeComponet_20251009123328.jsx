import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div className="flex">
      <div className=" sm:flex sm:flex-row hidden fixed">
        <SideBar />
      </div>
      <div className="sm:ml-72x w-full h-screen sm:overflow-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

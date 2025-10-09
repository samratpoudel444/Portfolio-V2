import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div className="flex">
      <div className=" sm:flex sm:flex-row hidden">
        <SideBar />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div className="flex">
      <div className="fixed sm:sh hidden">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

import React from "react";
import { Outlet } from "react-router";
import SideBar from "./Sidebar";

const HomeComponent = () => {
  return (
    <div>
      <div className="">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeComponent;

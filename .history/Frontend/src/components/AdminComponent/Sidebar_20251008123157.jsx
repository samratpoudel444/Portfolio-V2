import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BookIcon from "@mui/icons-material/Book";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";



const SideBar = () => {
    const [toogle, setToogle]= useState({})
    const user= useSelector((state)=> state.user.data)
    console.log(user)
  return (
    <div className="w-74 h-screen bg-[#202123]">
      <div className="py-4 text-center text-[#F7F7F8]">
        <h1 className="text-4xl font-bold mt-4">Dashboard</h1>
      </div>
      <div className="text-[#F7F7F8] flex flex-col gap-10 mt-10 text-xl ">
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999] ">
          <DashboardIcon /> Dashboard
        </button>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999] ">
          <AccessTimeFilledIcon />
          Create Remainders
        </button>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999] ">
          <BookIcon />
          Create Blogs
        </button>
        <Link to="addskills">
          <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999] ">
            <TipsAndUpdatesIcon />
            Add Skills
          </button>
        </Link>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999]">
          <PsychologyIcon />
          Add Experince
        </button>
        <Link to="addprojects"></Link>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999]">
          <AddTaskIcon />
          Add Projects
        </button>
      </div>

      <div className="fixed bottom-10 left-0 w-full flex ml-4 gap-3 items-center">
        <button className="flex items-center gap-5 text-xl text-white px-4 py-4 hover:rounded-2xl hover:bg-[#004999]  ">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-400"
          />
          <span className="">{user.firstName + " " + user.lastName}</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

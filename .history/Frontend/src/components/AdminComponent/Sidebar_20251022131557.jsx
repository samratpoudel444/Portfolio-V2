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
  const [toogle, setToogle] = useState({});
  const user = useSelector((state) => state.user.data);
  console.log(user);

  const buttonClasses =
    "flex items-center gap-4 px-4 py-3 text-2xl w-full text-[#F7F7F8] rounded-xl transition-all duration-200 hover:bg-[#004999] hover:translate-x-1";

  return (
    <div className="w-72 h-screen bg-[#202123] flex flex-col gap-8 justify-between">
      <div className="py-6 text-center text-[#F7F7F8] border-b border-gray-700">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-3 px-3">
        <Link to="/dashboard">
          <button className={buttonClasses}>
            <DashboardIcon /> Dashboard
          </button>
        </Link>

        <Link to="addeducation">
          <button className={buttonClasses}>
            <AccessTimeFilledIcon /> Add Education
          </button>
        </Link>

        <Link to="CreateBlogs">
          <button className={buttonClasses}>
            <BookIcon /> Create Blogs
          </button>
        </Link>

        <Link to="addskills">
          <button className={buttonClasses}>
            <TipsAndUpdatesIcon /> Add Skills
          </button>
        </Link>

        <Link to="addexperience">
          <button className={buttonClasses}>
            <PsychologyIcon /> Add Experience
          </button>
        </Link>

        <Link to="addprojects">
          <button className={buttonClasses}>
            <AddTaskIcon /> Add Projects
          </button>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-4 w-full text-left text-[#F7F7F8] px-4 py-3 rounded-xl hover:bg-[#004999] transition-all duration-200">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-500"
          />
          <span className="font-medium text-lg">
            {user.firstName + " " + user.lastName}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

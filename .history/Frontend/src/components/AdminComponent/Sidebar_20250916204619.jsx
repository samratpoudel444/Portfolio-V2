import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BookIcon from "@mui/icons-material/Book";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AddTaskIcon from "@mui/icons-material/AddTask";

const SideBar = () => {
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
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999] ">
          <TipsAndUpdatesIcon />
          Add Skills
        </button>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999]">
          <PsychologyIcon />
          Add Experince
        </button>
        <button className="flex items-center ml-4 gap-5 px-3 py-3 hover:rounded-2xl mr-4 hover:bg-[#004999]">
          <AddTaskIcon />
          Add Task
        </button>
      </div>

      <div className="flex flex-col justify-end">

      </div>
    </div>
  );
};

export default SideBar;

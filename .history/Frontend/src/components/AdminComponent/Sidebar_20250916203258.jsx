import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BookIcon from "@mui/icons-material/Book";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AddTaskIcon from "@mui/icons-material/AddTask";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-[#202123]">
      <div className="py-4 text-center text-[#F7F7F8]">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="text-[#F7F7F8] flex flex-col gap-10 mt-10 text-xl font-bold">
        <button className="py-3 hover:bg-[#000090] hover:text-2xl ">
          <DashboardIcon /> Dashboard
        </button>
        <button>
          <AccessTimeFilledIcon />
          Create Remainders
        </button>
        <button>
          <BookIcon />
          Create Blogs
        </button>
        <button>
          <TipsAndUpdatesIcon />
          Add Skills
        </button>
        <button>
          <PsychologyIcon />
          Add Experince
        </button>
        <button>
          <AddTaskIcon />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default SideBar;

import { Link } from "@mui/material";
import Samrat from "../../assets/bulb.png";

const Dashboard = () => {
  const cards = [
    { title: "View My Education", color: "bg-black", btn: "Education", link:"/admin/education" },
    { title: "View My Projects", color: "bg-[#8b0000]", btn: "Projects" },
    { title: "View My Experience", color: "bg-[#00008b]", btn: "Experience" },
    { title: "View My Blogs", color: "bg-[#008000]", btn: "Blogs" },
    { title: "View My Skills", color: "bg-[#800000]", btn: "Skills" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>Dashboard</h1>
      </div>

      <div className="sm:m-24 m-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-56 w-full ${card.color} rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 flex flex-col justify-between`}
          >
            <div className="flex gap-4 text-white p-4 justify-center items-center">
              <img
                src={Samrat}
                alt="profile"
                className="rounded-full w-20 h-20 ring-2 ring-white"
              />
              <h1 className="font-semibold text-xl leading-snug">
                {card.title}
              </h1>
            </div>

            <Link>
            <button className="mx-auto mb-4 px-5 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
              {card.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

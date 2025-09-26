import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav]= useState(false);

  const items = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Tools",
      link: "/tools",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <div>
      <div className="sm:hidden px-4 ">
        <button className="p-2 bg-yellow-500 mt-2 rounded-xl"><MenuIcon/></button>
      </div>
      {
        nav
      }
      <div className="sm:bg-green-900 sm:h-16 sm:rounded-4xl sm:mt-4 sm:mx-auto  sm:py-2 sm:flex sm:flex-row sm:items-center sm:w-[95%] hidden">
        <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
          S
        </div>
        <div className="ml-4 text-2xl text-white font-bold">
          Samrat <span className="text-yellow-700">.</span>
        </div>
        <div className="text-xl text-white flex items-center gap-16 ml-64  ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:underline hover:text-yellow-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="ml-auto mr-4">
          <button className="bg-white rounded-3xl px-5 py-3 ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

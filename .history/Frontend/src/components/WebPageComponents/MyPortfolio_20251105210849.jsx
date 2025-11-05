import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import js from "../../assets/js.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

const projects = [
  {
    Name: "MediGo",
    img: js,
    link: "",
  },
  {
    Name: "juttaHo- Ecommerce Platform",
    img: js,
    link: "",
  },

  {
    Name: "Remainder System",
    img: js,
    link: "",
  },
];
//getSpecificProjectForClient;


const MyPortfolio = () => {
  const [data, setData]= useState([]);
  useEffect(()=>
  {
    const getData= async()=>
    {
      try{
        const response = await axiosInstance.get(
          "/getSpecificProjectForClient"
        );
        setData(response.data.data)
      }
      catch(err)
      {
        toast.error(err.response.data.message)
      }
    }

    getData();
  },[])
  return (
    <div className="mt-16 bg-gray-100 sm:p-16 p-4" id="projects">
      <div className="flex flex-col">
        <div>
          <h1 className="sm:text-3xl text-xl">
            <a className="text-yellow-500">-</a> My Portfolio
          </h1>
        </div>

        <div className="sm:flex sm:flex-row flex-col gap-y-4 sm:mt-8 sm:justify-between mt-4">
          <h1 className="sm:text-4xl text-2xl">
            My Latest <a className="text-yellow-500">Projects</a>
          </h1>
          <button className="border rounded-4xl py-1 bg-green-900 flex items-center mt-4 sm:mt-0 ">
            <div className="flex flex-row border rounded-4xl bg-yellow-500 p-2">
              <p className="font-bold">View All Projects</p>
            </div>
            <a className="">
              <ArrowCircleRightIcon sx={{ color: "white" }} />
            </a>
          </button>
        </div>

        <div className="md:grid sm:grid-cols-3 md:mt-16 sm:gap-8 flex flex-col gap-4 mt-8">
          {data.map((data, index) => (
            <div
              key={index}
              className="flex flex-col rounded-4xl p-8 justify-center items-center bg-white shadow-md  hover:shadow-2xl"
            >
              <img src={data.img} alt="" className="rounded-3xl" />
              <h1 className="mt-4 text-2xl font-bold">{data.Name}</h1>
              <button className="p-2 border mt-4 bg-green-900 rounded-2xl md:w-1/2 text-white font-bold w-[90%]">
                <div className="bg-yellow-500 rounded-2xl text-black">
                  View Project
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

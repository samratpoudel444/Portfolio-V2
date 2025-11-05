import { useState,useEffect } from "react";
import js from "../../assets/js.png";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";


const Tools = [
  {
    name: "Java Script",
    img: js,
  },
  {
    name: "Express js",
    img: js,
  },

  {
    name: "Node js ",
    img: js,
  },

  {
    name: "React js",
    img: js,
  },

  {
    name: "Redis",
    img: js,
  },

  {
    name: "Rabbit MQ",
    img: js,
  },
];

const ToolsUsed = () => {

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await axiosInstance.get("/getSkillsForClient");
        setSkills(response.data.data);
        console.log("daa", response.data.data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    fetchSkill();
  }, []);


  return (
    <div
      className="mt-16 mx-auto flex flex-col justify-center items-center"
      id="tools"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">
          <a className="text-yellow-500">-</a>Tools I Use
        </h1>
        <p className="text-4xl text-yellow-500 italic ">Exploring The tools</p>
      </div>

      <div className="md:grid md:grid-cols-6 mt-16 md:mx-48 md:gap-4 grid grid-cols-2 gap-2">
        {skills.map((data, index) => (
          <div
            key={index}
            className=" border-2 rounded-full md:h-48 p-6 flex flex-col justify-center items-center gap-4 bg-gray-100 hover:shadow-lg md:w-full "
          >
            <img
              src={data.skillImage}
              alt={data.skillName}
              className="border-2 h-16  rounded-full"
            />
            <h1 className="text-xl font-semibold">{data.skillName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;

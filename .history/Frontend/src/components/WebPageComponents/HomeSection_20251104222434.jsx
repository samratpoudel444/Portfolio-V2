import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Samrat from "../../assets/Samrat2.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";



const HomeSection = ({id}) => {
  const [data,setData]= useState([]);

    useEffect(()=>
    {
      const getCVLink= async()=>
      {
        try{
          const response = await axiosInstance.get("/showCV");
          console.log(response)
          setData( response.data.message)
        }
        catch(err)
        {
          toast.error(err.response.data.message)
        }
      }
    })

  return (
    <div
      className="sm:flex sm:flex-row sm:mt-16 sm:mx-auto sm:w-[80%] gap-16 py-10 sm:justify-between mx-8 flex flex-col-reverse "
      id="home"
    >
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
        <div className="border-4 border-yellow-400 h-16 w-48 text-center sm:text-3xl py-2 text-xl">
          Hello There!
        </div>
        <div className="font-bold sm:text-4xl mt-4 text-2xl">
          I am{" "}
          <i className="text-yellow-400 font-light underline">Samrat Poudel,</i>
          <br />
          Software Developer <br />
          Based in Nepal <br />
          <br />
        </div>
        <div className="whitespace-normal text-xl text-center">
          I'm an experienced Software Developer based on Nepal having worked on
          serveral projects based on React.js and Node.js collaborating with
          various technology.
        </div>
        <div className="sm:flex sm:flex-row mt-16 gap-8 flex flex-col">
          <button className="bg-yellow-500 rounded-3xl px-1  flex gap-4 items-center hover:underline">
            <a
              className="rounded-3xl bg-green-800 py-3 text-white px-3"
              href="/myportfolio"
            >
              View My Portfolio
            </a>
            <a>
              <PlayCircleFilledIcon fontSize="large" />
            </a>
          </button>
          <button className="border-2 px-5 rounded-3xl py-3 hover:bg-green-50">
           <a href={data.CVLink}></a> Download CV
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center sm:w-1/2">
        <div className="rounded-full bg-yellow-500 sm:w-[420px] sm:h-[420px] w-[300px] h-[300px]"></div>
        <img
          src={Samrat}
          alt="samrat poudel"
          className="absolute z-10 sm:w-[500px] sm:h-[500px] w-[250px] h-[250px] ml-8"
        />
        <button></button>
      </div>
    </div>
  );
};

export default HomeSection;

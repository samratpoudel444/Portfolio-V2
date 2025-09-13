import { useState } from "react";
import image from "../../assets/Screenshot 2025-08-25 at 11.13.12.png";
import TextField from "@mui/material/TextField";

const LoginComponent = () => {

    const [showLeft, setShowLeft]= useState(false);
    console.log(showLeft)
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className={`${
          showLeft
            ? "hidden"
            : "w-full md:w-1/2 h-screen md:h-full  bg-[#121212] flex flex-col items-center justify-center gap-10 p-4 "
        }`}
      >
        <div className="flex justify-center items-center w-full">
          <img src={image} className="w-2/3 max-w-full" />
        </div>
        <div className="text-center w-[50%] sm:w-96">
          <p className="block text-2xl sm:text-5xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back !
          </p>
          <br />
          <p className="inline-block sm:text-2xl text-white font-bold mt-5 text-center">
            Good to see you again!
          </p>

          <button
            className="block md:hidden bg-[#121212] text-white px-4 py-2 rounded border border-white mt-16"
            onClick={() => setShowLeft(true)}
          >
            Click here to login
          </button>
        </div>

        <style>{`
      @keyframes typewriter {
        0% { width: 0 }
        50% { width: 100% }
        100% { width: 0 }
      }

      .animate-typewriter {
        width: 0;
        display: inline-block;
        animation: typewriter 6s steps(20, end) infinite;
      }
    `}</style>
      </div>

      <div
        className={`${
          showLeft ? "flex" : "hidden md:flex"
        } w-full md:w-1/2 h-full border justify-center items-center`}
      >
        <form className="w-full max-w-md">
            <h1 className="text-3xl font-bold">Login to Site</h1>
            
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

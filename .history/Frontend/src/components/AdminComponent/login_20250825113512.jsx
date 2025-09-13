import image from "../../assets/Screenshot 2025-08-25 at 11.13.12.png";

const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center ali">
      <div className="w-screen md:w-1/2 h-64  sm:h-full h-full border bg-[#121212] flex items-center flex-col gap-20 ">
        <div className="flex border-red-200 justify-center items-center">
          <img src={image} className="w-2/3" />
        </div>
        <div className="text-center mt-0 w-90 ">
          <p className="text-2xl  sm:text-5xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back !
          </p>
          <p className="text-2xl text-white font-bold mt-5">Good to see you again!</p>

          <button className="block md:hidden bg-[#121212] text-white px-4 py-2 rounded mt-4 border border-white mt-30">
            click here to login
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
            animation: typewriter 6s steps(20, end) infinite;
          }
        `}</style>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-screen border flex justify-center items-center">
        <form className="w-3/4">{/* Add your login form inputs here */}</form>
      </div>
    </div>
  );
};

export default LoginComponent;

import image from "../../assets/test-removebg-preview.png";

const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 h-64  sm:h-full h-full border bg-[#121212] flex items-center flex-col ">
        <div className="border-red-200">
          <img src={image} alt="" />
        </div>
        <div className="text-center mt-0">
          <p className="text-3xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back !
          </p>
          <p className="text-2xl text-white">“Good to see you again!”</p>

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

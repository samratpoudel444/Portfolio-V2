import image from "../../assets/Screenshot 2025-08-25 at 11.13.12.png";

const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 h-full  bg-[#121212] sm:flex flex-col sm:items-center sm:justify-center sm:gap-10 p-4 ">
        <div className="flex justify-center items-center w-full">
          <img src={image} className="w-2/3 max-w-full" />
        </div>
        <div className="text-center sm:w-96 w-48 ">
          <p className="block text-2xl sm:text-5xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back !
          </p>
          <br />
          <p className="inline-block sm:text-2xl text-white font-bold mt-5 text-center">
            Good to see you again!
          </p>

          <button className="block md:hidden bg-[#121212] text-white px-4 py-2 rounded mt-8 border border-white">
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

      <div className="w-full md:w-1/2 h-64 md:h-screen border flex justify-center items-center">
        <form className="w-full max-w-md">

        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

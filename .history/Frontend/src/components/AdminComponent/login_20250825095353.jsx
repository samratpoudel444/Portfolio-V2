const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 h-64 md:h-screen border bg-[#121212] flex justify-center items-center">
        <div className="text-center">
          <p className="text-3xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back Samrat!
          </p>

          {/* Mobile Only Button */}
          <button className="block md:hidden bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Mobile Only Button
          </button>
        </div>

        {/* CSS for typing + reverse effect */}
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

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-64 md:h-screen border flex justify-center items-center">
        <form className="w-3/4">{/* Add your login form inputs here */}</form>
      </div>
    </div>
  );
};

export default LoginComponent;

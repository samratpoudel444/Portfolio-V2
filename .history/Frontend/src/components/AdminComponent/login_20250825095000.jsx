const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-64 md:h-screen border bg-[#121212] flex justify-center items-center">
        <div className="text-center relative overflow-hidden w-full">
          <p
            className="text-3xl text-red-50 font-bold whitespace-nowrap"
            style={{
              animation: "slide 3s linear infinite alternate",
            }}
          >
            Welcome Back Samrat!
          </p>

          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0); }
              }
            `}
          </style>

          {/* Mobile Only Button */}
          <button className="block md:hidden bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Mobile Only Button
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-64 md:h-screen border flex justify-center items-center">
        <form className="w-3/4">{/* Add your login form inputs here */}</form>
      </div>
    </div>
  );
};

export default LoginComponent;

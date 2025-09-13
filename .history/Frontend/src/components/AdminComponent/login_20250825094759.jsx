const LoginComponent = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen border bg-[#121212] flex justify-center items-center">
        <div>
          <p
            className="text-3xl text-red-50 text-center font-bold "
            style={{
              animation: "slide 3s linear infinite",
            }}
          >
            Welcome Back Samrat !
          </p>
          <style>
            {`
      @keyframes slide {
        0% { left: 0; }
        100% { left: calc(100% - 100px); } /* stops before edge */
      }
    `}
          </style>


          <button className="md:hidden bg-blue-500 text-white p-3 rounded">
            Mobile Only Button
          </button>
        </div>
      </div>
      <div className="w-1/2 h-screen border ">
        <form></form>
      </div>
    </div>
  );
};

export default LoginComponent;

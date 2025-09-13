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

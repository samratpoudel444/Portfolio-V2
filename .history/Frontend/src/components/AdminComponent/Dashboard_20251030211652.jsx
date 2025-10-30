import Samrat from "../../assets/bulb.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>Dashboard</h1>
      </div>
      <div className="sm:m-24 m-8 sm:grid sm:grid-cols-3 flex flex-col gap-8">
        <div className="sm:w-1/3 h-56 w-full bg-black rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 flex flex-col justify-between">
          <div className="flex gap-4 text-white p-4 justify-center items-center">
            <img
              src={Samrat}
              alt="profile"
              className="rounded-full w-20 h-20 ring-2 ring-white"
            />
            <h1 className="font-semibold text-xl leading-snug">
              View My Education
            </h1>
          </div>

          <button className="mx-auto mb-4 px-5 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
            Education
          </button>
        </div>

        <div className="sm:w-1/3 h-56 w-full bg-[#8b0000] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 flex flex-col justify-between">
          <div className="flex gap-4 text-white p-4 justify-center items-center">
            <img
              src={Samrat}
              alt="profile"
              className="rounded-full w-20 h-20 ring-2 ring-white"
            />
            <h1 className="font-semibold text-xl leading-snug">
              View My Education
            </h1>
          </div>

          <button className="mx-auto mb-4 px-5 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
            Education
          </button>
        </div>

        <div className="sm:w-1/3 h-56 w-full bg-[#00008b] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 flex flex-col justify-between">
          <div className="flex gap-4 text-white p-4 justify-center items-center">
            <img
              src={Samrat}
              alt="profile"
              className="rounded-full w-20 h-20 ring-2 ring-white"
            />
            <h1 className="font-semibold text-xl leading-snug">
              View My Education
            </h1>
          </div>

          <button className="mx-auto mb-4 px-5 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
            Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import Samrat from "../../assets/bulb.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>Dashboard</h1>
      </div>
      <div className="sm:m-24 m-8 sm:flex sm:flex-row flex flex-col gap-8">
        <div className="sm:w-1/3 h-48 rounded-2xl w-full bg-[#000000] shadow-md hover:shadow-2xl">
          <div className="flex gap-4 text-white p-4 justify-center items-center">
            <img
              src={Samrat}
              alt=""
              className="border-white rounded-full w-20 h-20 "
            />
            <h1 className="font-bold text-xl">View My Education</h1>
          </div>
          <button className="border-white text-white">Education</button>
        </div>
        <div className="sm:w-1/3 h-48 rounded-2xl w-full bg-[#00008b] shadow-md hover:shadow-2xl"></div>
        <div className="sm:w-1/3 h-48 rounded-2xl w-full bg-[#8b0000] shadow-md hover:shadow-2xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;

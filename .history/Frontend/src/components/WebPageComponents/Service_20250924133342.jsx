import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Service = () => {
  return (
    <div className="mt-16 flex justify-between items-center mx-20">
      <div className="flex flex-col">
        <p className="text-2xl">-Services</p>
        <h1 className="font-bold text">Service I provide</h1>
      </div>
      <div>
        <button className="bg-yellow-500 text-white rounded-3xl px-5 py-3 flex items-center gap-2 hover:underline">
          <a>View all services</a>
        </button>
      </div>
    </div>
  );
};

export default Service;

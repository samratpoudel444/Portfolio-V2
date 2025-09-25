import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Service = () => {
  return (
    <div className="mt-16 flex justify-between items-center mx-20">
      <div className="flex flex-col">
        <p className="text-2xl">-Services</p>
        <h1>Service I provide</h1>
      </div>
      <div>
        <button>
          <a>View all services</a>
        </button>
      </div>
    </div>
  );
};

export default Service;

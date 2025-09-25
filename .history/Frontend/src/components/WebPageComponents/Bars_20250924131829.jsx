import AcUnitIcon from "@mui/icons-material/AcUnit";

const Bars = () => {
  return (
    <div className="mt-16">
      {/* Yellow background */}
      <div className="w-full h-24 bg-yellow-500 flex items-center">
        {/* Green bar */}
        <div className="h-2/3 w-1/2 bg-green-900 flex justify-around items-center text-white text-2xl font-bold">
          <marquee behavior="" direction="" className="flex gap-16">
            <div className="gap-4 flex">
              <AcUnitIcon />
              <span>Web Development</span>
            </div>

            <div className="gap-4 flex">
              <AcUnitIcon />
              <span>Application Development</span>
            </div>

            <div className="gap-4 flex">
              <AcUnitIcon />
              <span>Wireframe design</span>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Bars;

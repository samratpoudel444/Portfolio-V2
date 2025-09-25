import AcUnitIcon from "@mui/icons-material/AcUnit";

const Bars = () => {
  return (
    <div className="mt-16">
      <div className="w-full h-24 bg-yellow-500 overflow-hidden">
        <div className="h-2/3 w-full bg-green-900 w-1/2 mt-4 text-center flex justify-around items-center text-white text-2xl font-bold">
         <marquee behavior="" direction=""></marquee>
          <div className="gap-4 flex">
            <span>
              <AcUnitIcon />
            </span>
            <span>Web Development</span>
          </div>

          <div className="gap-4 flex">
            <span>
              <AcUnitIcon />
            </span>
            <span>Application Development</span>
          </div>

          <div className="gap-4 flex">
            <span>
              <AcUnitIcon />
            </span>
            <span>Wireframe design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bars;

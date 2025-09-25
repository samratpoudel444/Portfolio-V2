import AcUnitIcon from "@mui/icons-material/AcUnit";

const Bars = () => {
  return (
    <div className="mt-16">
      <div className="w-full h-24 bg-yellow-500 overflow-hidden">
        <div className="h-2/3 w-full bg-green-900 mt-4 text-center flex items-center text-white text-2xl font-bold overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex sm:gap-64 gap-16">
              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Web Development</span>
              </div>

              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Application Development</span>
              </div>

              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Wireframe design</span>
              </div>
            </div>

            Duplicate content for seamless loop
            <div className="flex sm:gap-64 gap-16 ml-64">
              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Web Development</span>
              </div>

              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Application Development</span>
              </div>

              <div className="gap-4 flex items-center">
                <span>
                  <AcUnitIcon />
                </span>
                <span>Wireframe design</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Bars;

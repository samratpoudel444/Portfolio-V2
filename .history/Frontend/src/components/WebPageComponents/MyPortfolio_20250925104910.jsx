import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const MyPortfolio = () => {
  return (
    <div className="mt-16 bg-gray-100 p-16">
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl">
            <a className="text-yellow-500">-</a> My Portfolio
          </h1>
        </div>

        <div className="flex flex-row mt-8">
          <h1 className="text-4xl">My Latest Projects</h1>
          <button className="border rounded-4xl py-2 bg-green-900">
            <div className="flex flex-row border rounded-4xl bg-yellow-500 p-2">
              <p className="">View All Projects</p>
            </div>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

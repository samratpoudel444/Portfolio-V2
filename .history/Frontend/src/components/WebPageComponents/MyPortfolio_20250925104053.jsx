import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const MyPortfolio = () => {
  return (
    <div className="mt-16 bg-gray-100">
      <div>
        <div>
          <h1>
            <a>-</a> MyPortfolio
          </h1>
        </div>

        <div>
          <h1>My Latest Projects</h1>
          <button>
            <div>
              <p>View All Projects</p>
              <a> <ArrowCircleRightIcon/></a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

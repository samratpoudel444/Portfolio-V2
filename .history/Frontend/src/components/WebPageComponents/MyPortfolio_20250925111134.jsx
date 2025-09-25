import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import js from "../../assets/js.png";

const projects = [
  {
    Name: "MediGo",
    img: js,
  },
  {
    Name: "juttaHo- An Integrated Ecommerce Platform",
    img: js,
  },

  {
    Name: "Remainder System",
    img: js,
  },

  {
    Name: "Blogging System",
    img: js,
  },
];



const MyPortfolio = () => {
  return (
    <div className="mt-16 bg-gray-100 p-16">
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl">
            <a className="text-yellow-500">-</a> My Portfolio
          </h1>
        </div>

        <div className="flex flex-row mt-8 justify-between">
          <h1 className="text-4xl">
            My Latest <a className="">Projects</a>
          </h1>
          <button className="border rounded-4xl py-1 bg-green-900 flex items-center">
            <div className="flex flex-row border rounded-4xl bg-yellow-500 p-2">
              <p className="">View All Projects</p>
            </div>
            <a className="">
              <ArrowCircleRightIcon sx={{ color: "white" }} />
            </a>
          </button>
        </div>

        <div className="grid grid-cols-2 mt-16 gap-8">
          {projects.map((data, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl p-8 justify-center items-center bg-white shadow-lg"
            >
              <img src={data.img} alt="" className="h-100 w-150"/>
              <h1 className="mt-4 text">{data.Name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

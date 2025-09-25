import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const projects = [
  {
    Name: "MediGo",
    img: "",
  },
  {
    Name: "juttaHo- An Integrated Ecommerce Platform",
    img: "",
  },

  {
    Name: "Remainder System",
    img: "",
  },

  {
    Name: "Blogging System",
    img: "",
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
          <h1 className="text-4xl">My Latest Projects</h1>
          <button className="border rounded-4xl py-1 bg-green-900 flex items-center">
            <div className="flex flex-row border rounded-4xl bg-yellow-500 p-2">
              <p className="">View All Projects</p>
            </div>
            <a className="">
              <ArrowCircleRightIcon sx={{ color: "white" }} />
            </a>
          </button>
        </div>

        {projects.map((data, index)=>
        (
            <div key={index} className="">

            </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;

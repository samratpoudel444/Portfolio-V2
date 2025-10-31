import samrat from "../../assets/Samrat1.png";
import { Link } from "react-router-dom";

const project = [
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: { samrat },
  },
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: { samrat },
  },
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: samrat ,
  },
];

const ViewProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <Link to={-1}>
          <button className="border rounded-2xl p-2 text-xl text-black">
            <ArrowBackIcon /> Back
          </button>
        </Link>
        <h1>View Projects</h1>
      </div>
    </div>
  );
};

export default ViewProjects;

import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Experince = [
  {
    CompanyName: "hello",
    WorkedYear: "2020-2020",
    Position: "school",
  },
  {
    CompanyName: "hello",
    WorkedYear: "2020-2020",
    Position: "school",
  },
  {
    CompanyName: "hello",
    WorkedYear: "2020-2020",
    Position: "school",
  },
];

const ViewExperince = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-start items-center shadow-md text-white text-3xl font-semibold">
        <Link to={-1}>
          <button className="border rounded-2xl p-2 text-xl text-black">
            <ArrowBackIcon /> Back
          </button>
        </Link>
        <h1>View Experince</h1>
      </div>
    </div>
  );
};

export default ViewExperince;

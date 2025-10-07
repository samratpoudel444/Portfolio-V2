import Navbar from "./Navbar";
import SchoolIcon from "@mui/icons-material/School";

const EducationData=[{
    instituteName:"Sagarmatha College of Science and technology",
    faculty:"Bachelor's In Computer Science And Information Technology",
    year:"2022-2026"
}]

const MyPortfolioPage= ()=>
{
    return (
      <div>
        <Navbar />
        <div className="sm:p-16 p-8">
          <div className="text-center flex flex-col gap-8">
            <h1 className="sm:text-2xl text-xl">
              <a>-</a> Education and Work
            </h1>
            <p className="sm:text-4xl text-2xl">
              My{" "}
              <a className="text-yellow-500 italic ">
                Academic and <br /> Professional
              </a>{" "}
              Journey
            </p>
          </div>
          <div className="sm:flex sm:flex-row flex flex-col sm:p-16 px-4 py-8">
            <div className="flex flex-col rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl gap-4">
              <h1 className="flex text-4xl gap-8 p-2">
                <div className="bg-yellow-500 flex items-center rounded-full p-2">
                  <SchoolIcon />
                </div>
                Education
              </h1>
              {EducationData.map((data, index) => (
                <div key={index}>
                  <a>{data.year}</a>
                  <a>{data.year}</a>
                </div>
              ))}
            </div>
            <div>Work Experince</div>
          </div>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
import Navbar from "./Navbar";
import SchoolIcon from "@mui/icons-material/School";

const EducationData = [
  {
    instituteName: "Sagarmatha College",
    faculty: "Bachelor (Bsc.CSIT)",
    year: "2022-2026",
  },
  {
    instituteName: "D.A.V College",
    faculty: "Intermediate School (Science)",
    year: "2019-2021",
  },

  {
    instituteName: "Cardinal Int'l Boarding High School",
    faculty: "Basic School",
    year: "2005-2018",
  },

];

const WorkExperince = [
  {
    instituteName: "Swift Techonology pvt.ltd",
    workName: "Backend Development",
    year: "2024-2025",
  },
];




const MyPortfolioPage= ()=>
{
    return (
      <div>
        <Navbar />
        <div className=" p-8">
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
          <div className="sm:flex sm:flex-row flex flex-col sm:p-16 sm:px-4 sm:py-8 py-4 md:gap-64 gap-8 justify-around">
            <div className="flex flex-col rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl gap-4 sm:p-16 p-8">
              <h1 className="flex sm:text-4xl text-xl items-center gap-8 p-2 border-b-1 border-gray-400">
                <div className="bg-yellow-500 flex items-center rounded-full p-2">
                  <SchoolIcon />
                </div>
                Education
              </h1>
              {EducationData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:text-xl gap-2 border-l-2 p-4 border-gray-400"
                >
                  <a className="text-gray-400">{data.year}</a>
                  <a className="font-bold sm:text-2xl">{data.instituteName}</a>
                  <a className="text-gray-400">{data.faculty}</a>
                </div>
              ))}
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl gap-4 p-8">
              <h1 className="flex sm:text-4xl items-center text-xl gap-8 p-2 border-b-1 border-gray-400">
                <div className="bg-yellow-500 flex items-center rounded-full p-2">
                  <SchoolIcon />
                </div>
                Work Experince
              </h1>
              {WorkExperince.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:text-xl gap-2 border-l-2 p-4 border-gray-400"
                >
                  <a className="text-gray-400">{data.year}</a>
                  <a className="font-bold sm:text-2xl">{data.instituteName}</a>
                  <a className="text-gray-400">{data.workName}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="">
                <div>
                  <h1>My P</h1>
                </div>
          </div>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
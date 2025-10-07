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
          <div className="sm:flex sm:flex-row flex flex-col sm:p-16 px-4 py-8">
            <div className="flex flex-col rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl gap-8 p-8">
              <h1 className="flex text-4xl gap-8 p-2">
                <div className="bg-yellow-500 flex items-center rounded-full p-2">
                  <SchoolIcon />
                </div>
                Education
              </h1>
              {EducationData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col text-xl gap-2"
                >
                  <a className="text-gray-400">{data.year}</a>
                  <a className="font-bold text-2xl">{data.instituteName}</a>
                  <a className="text-gray-400">{data.faculty}</a>
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
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
              </a>
              {" "}Journey
            </p>
          </div>
          <div className="sm:flex sm:flex-row flex flex-col sm:p-16 p-">
            <div className="">
              <h1 className="flex text-4xl gap-8 p-2">
                <div className="bg-yellow-500 flex items-center rounded-full p-2">
                  <SchoolIcon/>
                </div>
                Education
              </h1>
              
            </div>
            <div>Work Experince</div>
          </div>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
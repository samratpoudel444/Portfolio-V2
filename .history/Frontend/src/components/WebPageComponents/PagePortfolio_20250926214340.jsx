import Navbar from "./Navbar";

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
        <div className="p-16">
          <div className="text-center">
            <h1 className="text-2xl">
              <a>-</a> Education and Work
            </h1>
            <p className="text-4xl">
              My <a className="text-yellow-500 italic ">Academic and <br /> Professional </a>Journey
            </p>
          </div>
          <div>
            <div>Education</div>
            <div>Work Experince</div>
          </div>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
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
        <div className="">
            <h1><a>-</a> Education and Work</h1>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
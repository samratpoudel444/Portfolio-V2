import Navbar from "./Navbar";

const EducationData=[{
    instituteName:"Sagarmatha College of Science and technology",
    faculty:"Bachelor's in computer science and information technology",
    year:""
}]

const MyPortfolioPage= ()=>
{
    return (
      <div>
        <Navbar />
        <div>
            <h1><a>-</a> Education and Work</h1>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
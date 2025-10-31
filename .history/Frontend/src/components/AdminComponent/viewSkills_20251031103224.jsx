import samrat from "../../assets/Samrat1.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const skills = [
  {
    SkillName: "test",
    SkillImage: samrat,
  },
  {
    SkillName: "test",
    SkillImage: samrat,
  },
  {
    SkillName: "test",
    SkillImage: samrat,
  },
];

const ViewSkills= ()=>
{
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex justify-start items-center shadow-md text-white text-3xl font-semibold">
          <h1>View Skills</h1>
        </div>
      </div>
    );
}

export default ViewSkills;
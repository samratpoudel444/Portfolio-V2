
import SchoolIcon from "@mui/icons-material/School";
import Samrat from "../../assets/Samrat1.png";
import { Link } from "react-router-dom";
import MyContribution from "./GitHubContributions";
import Footer from "./footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    instituteName: "Swift Techonology private limited",
    workName: "Backend Development",
    year: "2024-2025",
  },
];

const MyTask = [
  {
    id: 1,
    title: "Design Landing Page",
    description:
      "Create a responsive landing page for the portfolio website using Tailwind CSS and React components.",
    image: Samrat,
    link: "",
  },
  {
    id: 2,
    title: "Set up Backend API",
    description:
      "Develop REST API endpoints for managing tasks and users using Node.js, Express, and PostgreSQL.",
    image: Samrat,
    link: "",
  },
  {
    id: 3,
    title: "Implement Authentication",
    description:
      "Add JWT-based login and registration system with role-based access control.",
    image: Samrat,
    link: "",
  },
  {
    id: 4,
    title: "Create Task Dashboard",
    description:
      "Build a React dashboard showing all tasks, filter by status and priority, and allow marking tasks as completed.",
    image: Samrat,
    link: "",
  },
  {
    id: 5,
    title: "Write Unit Tests",
    description:
      "Write unit tests for backend API endpoints using Jest and supertest to ensure proper task management functionality.",
    image: Samrat,
    link: "",
  },
];

function TruncatedText({ text }) {
  return <p>{text.length > 80 ? text.substring(0, 80) + "..." : text}</p>;
}

const MyPortfolioPage= ()=>
{
    return (
      <div>
        <div className="mt-4">
          <a href="/#home">
            <ArrowBackIcon />{}
            Back to home page
          </a>
        </div>
        <div className="">
          <div className="text-center flex flex-col gap-8 p-8">
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
          <div className="sm:flex sm:flex-row flex flex-col sm:p-16 sm:px-4 sm:py-8 py-4 md:gap-64 gap-8 justify-around m-4">
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
          <div className="mt-16 bg-gray-300 flex flex-col p-8">
            <div className="sm:text-2xl text-xl text-center flex flex-col gap-4">
              <h1>
                My <a className="text-yellow-500 italic">Projects & Tasks</a>{" "}
              </h1>
              <h2>
                A curated list of tasks and projects I’ve worked on, showcasing
                my skills and experience.
              </h2>
            </div>
            <div className="sm: grid sm:grid-cols-3 flex flex-col mt-16 sm:gap-8 gap-4 ">
              {MyTask.map((items, count) => (
                <div
                  key={count}
                  className="flex flex-col rounded-2xl bg-white justify-center items-center p-4 gap-4 shadow-sm hover:shadow-2xl"
                >
                  <img src={items.image} alt={items.title} className="h-2/3" />
                  <a className="sm:text-2xl font-bold text-xl">{items.title}</a>
                  <p>{items.description}</p>
                  <button className="rounded-2xl w-2/3 p-2 bg-yellow-500 hover:bg-yellow-600">
                    <a href="https://www.fb.com">View Project</a>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-8">
            <MyContribution />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default MyPortfolioPage;
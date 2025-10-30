import samrat from "../../assets/Samrat1.png";

const project = [
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: { samrat },
  },
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: { samrat },
  },
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: { samrat },
  },
];

const ViewProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>View Experince</h1>
      </div>
    </div>
  );
};

export default ViewProjects;

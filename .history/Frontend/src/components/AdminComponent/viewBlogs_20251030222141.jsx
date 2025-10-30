import  samrat from "../../assets/Samrat1.png";

const blogs = [
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
];

const ViewBlogs= ()=>
{
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
          <h1>View Blogs</h1>
        </div>
      </div>
    );
}

export default ViewBlogs;
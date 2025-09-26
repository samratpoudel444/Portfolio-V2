import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Samrat from "../../assets/Samrat2.png";


function TruncateText({text})
{
    return (
      <p>{text.length > 20 ? text.substring(0, 20) + "..." : text}</p>
    );
}

const Blogs = [
  {
    Title: "Understanding Web Development",
    Content:
      "Web development is the process of creating and maintaining websites or web applications that run on the internet. It involves both the visual aspects that users see and interact with, as well as the technical logic that powers those interactions behind the scenes.",
    Genre: "Website",
    Date: "2022-10-10",
  },
  {
    Title: "Front-End Development",
    Content:
      "This is what users see on the screen. It includes layouts, buttons, colors, animations, and navigation. Technologies such as HTML, CSS, and JavaScript are the foundation of front-end development. Modern frameworks like React, Angular, and Vue make it easier to build interactive interfaces.",
    Genre: "Frontend",
    Date: "2022-10-10",
  },
  {
    Title: "Back-End Development",
    Content:
      "This is the engine that drives a website. It handles databases, servers, and application logic. Back-end developers use technologies like Node.js, Python, PHP, Ruby, and Java. Databases such as MySQL, MongoDB, and PostgreSQL are used to store and retrieve data.Full-Stack Development – A full-stack developer works on both the front end and back end, combining user experience with server-side logic.",
    Genre: "BackEnd",
    Date: "2022-10-10",
  },
];


const BlogPage = () => {
  return (
    <div className="sm:p-16 p-4">
      <div className="sm:flex sm:flex-row flex flex-col sm:gap-8 sm:justify-between sm:items-end sm:mr-16 gap-4">
        <div className="flex  flex-col gap-8">
          <h1 className="text-2xl">
            <a className="text-yellow-500">-</a>News & Blogs
          </h1>
          <a className="text-4xl">
            Our Latest <br />
            News & Blogs
          </a>
        </div>
        <div>
          <button className="bg-green-900 py-2  rounded-4xl flex gap-2 font-bold items-center">
            <div className="bg-yellow-500 rounded-4xl p-2">
              <a>View All Blogs</a>
            </div>
            <div className="mr-1">
              <a>
                <ArrowCircleRightIcon sx={{ color: "white" }} />
              </a>
            </div>
          </button>
        </div>
      </div>
      <div className="sm:mt-16 sm:grid sm:grid-cols-3 mt-8 flex flex-col gap-8 ">
        {Blogs.map((data, items) => (
          <div className="border p-4 flex flex-col gap-4">
            <img src={Samrat} alt="" className="border rounded-4xl" />
            <div className="flex flex-row gap-4">
              <a className=" p-2 rounded-4xl bg-yellow-500 font-bold">
                {data.Genre}
              </a>
              <a className=" p-2 rounded-4xl bg-yellow-500 font-bold">
                {data.Date}
              </a>
            </div>
            <div className="text-2xl font-bold">{data.Title}</div>
            <div><TruncatedText text={data.Content}/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

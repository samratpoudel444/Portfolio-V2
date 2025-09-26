import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Blogs = [
  {
    Title: "Understanding Web Development",
    Content:
      "Web development is the process of creating and maintaining websites or web applications that run on the internet. It involves both the visual aspects that users see and interact with, as well as the technical logic that powers those interactions behind the scenes.",
    Genre: "Website",
  },
  {
    Title: "Front-End Development",
    Content:
      "This is what users see on the screen. It includes layouts, buttons, colors, animations, and navigation. Technologies such as HTML, CSS, and JavaScript are the foundation of front-end development. Modern frameworks like React, Angular, and Vue make it easier to build interactive interfaces.",
    Genre: "Frontend",
  },
  {
    Title: "Back-End Development",
    Content: "This is the engine that drives a website. It handles databases, servers, and application logic. Back-end developers use technologies like Node.js, Python, PHP, Ruby, and Java. Databases such as MySQL, MongoDB, and PostgreSQL are used to store and retrieve data.Full-Stack Development – A full-stack developer works on both the front end and back end, combining user experience with server-side logic.",
    Genre: "BackEnd",
  },
];


const BlogPage = () => {
  return (
    <div className="p-16  ">
      <div className="flex flex-row gap-8 justify-between items-end mr-16">
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
      <div className="sm:mt-16 sm:grid sm:grid-cols-3 mt-8 flex flex-col ">
        {
            {b}
        }
      </div>
    </div>
  );
};

export default BlogPage;

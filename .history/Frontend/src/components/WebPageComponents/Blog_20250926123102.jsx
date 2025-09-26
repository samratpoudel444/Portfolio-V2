import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Blogs=[{
    Title:"",
    Content:"",
    Genre:""
}]


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
      <div className="mt-16 flex"></div>
    </div>
  );
};

export default BlogPage;

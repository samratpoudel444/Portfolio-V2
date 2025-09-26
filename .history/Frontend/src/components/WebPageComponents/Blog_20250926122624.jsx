import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const BlogPage = () => {
  return (
    <div className="p-16 flex flex-row gap-8 justify-between items-end mr-16 ">
      <div>
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
          <button className="bg-green-900 py-2  rounded-4xl flex gap-2">
            <div className="bg-yellow-500 rounded-4xl px-2">
              <a>View All Blogs</a>
            </div>
            <div className="mr-1">
              <a>
                <ArrowCircleRightIcon />
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

const BlogPage=()=>
{
    return (
      <div className="p-16 flex flex-row gap-8 justify-between items-end mr-16 bg-green-900">
        <div className="flex  flex-col gap-4">
          <h1 className="text-2xl">
            <a className="text-yellow-500">-</a>News & Blogs
          </h1>
          <a className="text-4xl">
            Our Latest <br />
            News & Blogs
          </a>
        </div>
        <div>
          <button>
            <div>
              <a>View All Blogs</a>
              <a></a>
            </div>
          </button>
        </div>
      </div>
    );
}

export default BlogPage;
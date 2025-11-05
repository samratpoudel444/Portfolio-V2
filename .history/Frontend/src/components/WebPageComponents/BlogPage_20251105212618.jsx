import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axiosInstance.get("/getAllBlogs");
        setBlogs(response.data.data);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch blogs");
      }
    };
    getBlogs();
  }, []);

  return (
    <div className="mt-16 bg-gray-100 sm:p-16 p-4" id="blogs">
      <div className="flex flex-col">
        {/* Section Title */}
        <h1 className="sm:text-3xl text-xl font-semibold">
          <span className="text-yellow-500">-</span> My Blogs
        </h1>

        {/* Header with "View All Blogs" */}
        <div className="sm:flex sm:justify-between sm:items-center flex-col mt-4 sm:mt-8 gap-4">
          <h2 className="sm:text-4xl text-2xl font-bold">
            Latest <span className="text-yellow-500">Blogs</span>
          </h2>
          <Link
            to="/all-blogs"
            className="inline-flex items-center bg-green-900 rounded-xl overflow-hidden hover:bg-green-800 transition"
          >
            <div className="bg-yellow-500 px-4 py-2 font-bold text-black">
              View All Blogs
            </div>
            <ArrowCircleRightIcon
              sx={{ color: "white", fontSize: 30 }}
              className="ml-2"
            />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div className="mt-8 sm:mt-16 grid sm:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition"
            >
              {blog.AddImage && (
                <img
                  src={blog.AddImage}
                  alt={blog.blogTitle}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">{blog.blogTitle}</h3>
                <p className="text-gray-700 mb-4">{blog.Description}</p>
                <Link
                  to={`/blog/${blog.id}`} // Link to blog details page
                  className="w-full text-center bg-green-900 text-white font-bold py-2 rounded-xl hover:bg-green-800 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

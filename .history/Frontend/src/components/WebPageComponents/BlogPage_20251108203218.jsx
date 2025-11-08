
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axiosInstance.get("/getAllBlogsForClient");
        console.log("gro", response.data.data)
        setBlogs(response.data.data);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch blogs");
      }
    };
    getBlogs();
  }, []);

  return (
    <div className=" bg-gray-100 p-4" id="blogs">
      <div>
        {" "}
        <a href="/#home" className="flex">
          <ArrowBackIcon /> Back to home page
        </a>
      </div>
      <div className="flex flex-col mt-16">
        <h1 className="sm:text-3xl text-xl font-semibold">
          <span className="text-yellow-500">-</span> My Blogs
        </h1>

        <div className="sm:flex sm:justify-between sm:items-center flex-col mt-4 sm:mt-8 gap-4">
          <h2 className="sm:text-4xl text-2xl font-bold">
            Latest <span className="text-yellow-500">Blogs</span>
          </h2>
        </div>

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
                <a
                  href={`/blog/${blog.id}`} target="_blank"
                  className="w-full text-center bg-green-900 text-white font-bold py-2 rounded-xl hover:bg-green-800 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
